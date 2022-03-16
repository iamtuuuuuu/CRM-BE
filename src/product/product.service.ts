import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  findTaskOfProduct(id: number) {
    return this.prisma.$queryRaw`exec getTasksOfProduct @productId = ${id}`;
  }

  addTaskForProduct(productId: number, taskId: number) {
    return this.prisma.productTask.create({
      data: {
        productId: productId,
        taskId: taskId,
      },
    });
  }

  deleteTasksOfProduct(productId, TaskIds) {
    return this.prisma.productTask.deleteMany({
      where: {
        taskId: {
          in: TaskIds,
        },
        productId,
      },
    });
  }

  update(id: number, data: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
