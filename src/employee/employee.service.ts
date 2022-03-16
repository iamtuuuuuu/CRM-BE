import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import * as bcrypt from 'bcrypt';
import User, { Role, Status } from '../casl/user.entity';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.EmployeeUncheckedCreateInput) {
    return this.prisma.employee.create({
      data,
    });
  }

  async register(data: Prisma.EmployeeUncheckedCreateInput) {
    const saltOrRounds = 10;
    const password = data.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    data.password = hash;
    return this.prisma.employee.create({
      data,
    });
  }

  async getUser(userId: number) {
    const user: any = await this.prisma.employee.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        status: true,
        EmployeeRole: {
          select: {
            role: {
              select: {
                role: true,
              },
            },
          },
        },
      },
    });
    user.EmployeeRole = user.EmployeeRole.map((role) => {
      return role.role.role as Role;
    });
    user.roles = user.EmployeeRole;
    delete user.EmployeeRole;
    return user as User;
  }

  findAll() {
    return this.prisma.$queryRaw`EXEC SelectAllEmployee;`;
    // return this.prisma.employee.findMany({
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     phoneNumber: true,
    //     status: true,
    //     employee: {
    //       select: {
    //         id: true,
    //         name: true,
    //       },
    //     },
    //   },
    // });
  }

  findOne(email: string) {
    return this.prisma.employee.findUnique({
      where: {
        email,
      },
    });
  }

  editStatus(id: number, data: Prisma.EmployeeUncheckedUpdateInput) {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
      },
    });
    // return this.prisma
    //   .$executeRaw`exec EditStatusEmployee @status = ${status}, @id = ${id}`;
  }

  updateProfile(id: number, data: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
