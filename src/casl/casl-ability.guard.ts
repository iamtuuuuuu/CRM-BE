import { ForbiddenError } from '@casl/ability';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CHECK_ABILITY, RequiredRule } from './casl-ability.decorator';
import { CaslAbilityFactory } from './casl-ability.factory';
import User, { Role, Status } from './user.entity';
import { Request } from 'express';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];
    const req: Request = context.switchToHttp().getRequest();
    const user = req.user as User;
    if (!user) {
      throw new UnauthorizedException();
    }
    // const user: User = {
    //   id: 2,
    //   name: 'vuanhtu',
    //   email: 'vuanhtu@gmail.com',
    //   status: Status.ACTIVE,
    //   roles: [Role.ADMIN],
    // };

    const ability = this.caslAbilityFactory.defineAbility(user);
    try {
      rules.forEach((rule) => {
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject);
      });
      return true;
    } catch (error) {
      if (error instanceof ForbiddenError)
        throw new ForbiddenException(error.message);
    }
  }
}
