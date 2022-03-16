import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Prisma } from '@prisma/client';
import uploadImage from '../utils/imgbbUploader.utils';
import { multerOptions } from './configs/multer.config';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { Product } from '../@generated/prisma-nestjs-graphql/product/product.model';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { AddTaskForProductDto } from './dto/add-task-for-product.dto';
import { DeleteTaskForProductDto } from './dto/delete-task-for-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: Product })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('linkImg', multerOptions))
  async create(
    @Body() createProductDto: Prisma.ProductCreateInput,
    @UploadedFile() linkImg: Express.Multer.File,
  ) {
    const link = await uploadImage(linkImg.path);

    return this.productService.create({ ...createProductDto, linkImg: link });
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Product })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Product })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Get('/get-tasks/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Product })
  @UseGuards(JwtAuthGuard)
  findTaskOfProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findTaskOfProduct(id);
  }

  @Post('/add-task/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Product })
  @UseGuards(JwtAuthGuard)
  addTaskForProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: AddTaskForProductDto,
  ) {
    return this.productService.addTaskForProduct(id, data.id);
  }

  @Delete('/delete-task/:id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Product })
  @UseGuards(JwtAuthGuard)
  deleteTaskForProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: DeleteTaskForProductDto,
  ) {
    return this.productService.deleteTasksOfProduct(id, data.ids);
  }

  @Patch(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Product })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('linkImg', multerOptions))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: Prisma.ProductUpdateInput,
    @UploadedFile() linkImg: Express.Multer.File,
  ) {
    if (linkImg) {
      const link = await uploadImage(linkImg.path);
      return this.productService.update(id, {
        ...updateProductDto,
        linkImg: link,
      });
    }
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
