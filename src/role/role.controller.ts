import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Prisma } from '@prisma/client';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  createRole(@Body() createRoleDto: Prisma.RoleCreateInput) {
    return this.roleService.addRole(createRoleDto);
  }

  @Post('/add-role-for-employee')
  addRoleForEmployee(
    @Body() employeeRoleDto: Prisma.EmployeeRoleUncheckedCreateInput,
  ) {
    return this.roleService.addRoleForEmployee(employeeRoleDto);
  }
}
