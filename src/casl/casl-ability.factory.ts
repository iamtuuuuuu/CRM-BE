import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import User, { Role, Status } from './user.entity';
import { Employee } from '../@generated/prisma-nestjs-graphql/employee/employee.model';
import { Customer } from '../@generated/prisma-nestjs-graphql/customer/customer.model';
import { Problem } from '../@generated/prisma-nestjs-graphql/problem/problem.model';
import { CustomerCampaign } from '../@generated/prisma-nestjs-graphql/customer-campaign/customer-campaign.model';
import { Department } from '../@generated/prisma-nestjs-graphql/department/department.model';
import { Product } from '../@generated/prisma-nestjs-graphql/product/product.model';
import { Task } from '../@generated/prisma-nestjs-graphql/task/task.model';
import { Campaign } from '../@generated/prisma-nestjs-graphql/campaign/campaign.model';

export enum Action {
  Manage = 'manage', // wildcard for any action
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects =
  | InferSubjects<
      | typeof Employee
      | typeof Customer
      | typeof Problem
      | typeof CustomerCampaign
      | typeof Department
      | typeof Product
      | typeof Task
      | typeof Campaign
    >
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>,
    );
    console.log(user);
    if (user.status === Status.BAN) {
      cannot(Action.Manage, 'all').because('Your account was banned!');
    } else if (user.roles.includes(Role.ADMIN)) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, Employee);
      cannot(Action.Create, Employee);
      cannot(Action.Update, Employee);
      cannot(Action.Delete, Employee);
      can(Action.Create, Customer);
      can(Action.Read, Customer);
      can(Action.Update, Customer);
      cannot(Action.Delete, Customer);
      cannot(Action.Manage, Department);
      can(Action.Read, Department);
      cannot(Action.Manage, Product);
      can(Action.Read, Product);
      cannot(Action.Manage, Task);
      can(Action.Read, Task);
      cannot(Action.Manage, Campaign);
      can(Action.Read, Campaign);
      can(Action.Create, Customer);
      can(Action.Read, Customer);
      can(Action.Update, Customer);
      cannot(Action.Delete, Customer);
    }

    return build();
  }
}
