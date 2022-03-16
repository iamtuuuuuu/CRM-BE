import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prismaService: PrismaService) {}

  addRole(data: Prisma.RoleCreateInput) {
    return this.prismaService.role.create({
      data,
    });
  }

  addRoleForEmployee(data: Prisma.EmployeeRoleUncheckedCreateInput) {
    return this.prismaService.employeeRole.create({
      data,
    });
  }
}
