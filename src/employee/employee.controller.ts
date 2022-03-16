import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Prisma } from '@prisma/client';
import { GetUser } from '../decorator/get-user.decorator';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { Employee } from 'src/@generated/prisma-nestjs-graphql/employee/employee.model';
import { EditEmployeeDto } from './dto/edit-status.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // isAmin ???
  // @Post()
  // create(@Body() createEmployeeDto: Prisma.EmployeeUncheckedCreateInput) {
  //   return this.employeeService.create(createEmployeeDto);
  // }

  @Post('/register')
  async register(
    @Body() registerEmployeeDto: Prisma.EmployeeUncheckedCreateInput,
  ) {
    await this.employeeService.register(registerEmployeeDto);
    return {
      statusCode: 201,
      message: 'create account successfully',
    };
  }

  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  profile(@GetUser() user) {
    // return this.employeeService.getUser(user.id);
    return user;
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Employee })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.employeeService.findAll();
  }

  @Get('/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Employee })
  @UseGuards(JwtAuthGuard)
  getEmployee(@Param('id') id: string) {
    return this.employeeService.getUser(+id);
  }

  @Patch('/edit-employee/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Employee })
  @UseGuards(JwtAuthGuard)
  async editEmployee(
    @Body() editDto: EditEmployeeDto,
    @Param('id') id: string,
  ) {
    return await this.employeeService.editStatus(+id, editDto);
    // if (result === 1) {
    //   return {
    //     message: `update employee ${id} successfully`,
    //   };
    // } else {
    //   throw new InternalServerErrorException('Something went wrong!');
    // }
  }
}
