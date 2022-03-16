import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CaslModule } from '../casl/casl.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [CaslModule],
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
