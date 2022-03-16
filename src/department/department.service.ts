import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.DepartmentUncheckedCreateInput) {
    return this.prisma.department.create({
      data,
    });
  }

  findAll() {
    return this.prisma.$queryRaw`exec findAllDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, data: Prisma.DepartmentUncheckedUpdateInput) {
    return this.prisma.department.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(ids: number[]) {
    return this.prisma.department.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
