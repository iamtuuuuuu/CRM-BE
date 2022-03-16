import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DepartmentService } from './department.service';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { Department } from '../@generated/prisma-nestjs-graphql/department/department.model';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { DeleteDepartmentDto } from './dto/delete-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: Department })
  @UseGuards(JwtAuthGuard)
  create(@Body() createDepartmentDto: Prisma.DepartmentUncheckedCreateInput) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Department })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Department })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Department })
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: Prisma.DepartmentUncheckedUpdateInput,
  ) {
    return this.departmentService.update(+id, data);
  }

  @Delete('/delete')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Delete, subject: Department })
  @UseGuards(JwtAuthGuard)
  delete(@Body() data: DeleteDepartmentDto) {
    return this.departmentService.remove(data.ids);
  }
}
