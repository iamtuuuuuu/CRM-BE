import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Prisma } from '@prisma/client';
import { DeleteTasksDto } from './dto/delete-tasks.dto';
import { AbilitiesGuard } from '../casl/casl-ability.guard';
import { CheckAbilities } from '../casl/casl-ability.decorator';
import { Action } from '../casl/casl-ability.factory';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Task } from '../@generated/prisma-nestjs-graphql/task/task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Create, subject: Task })
  @UseGuards(JwtAuthGuard)
  create(@Body() createTaskDto: Prisma.TaskCreateInput) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Task })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Read, subject: Task })
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Update, subject: Task })
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: Prisma.TaskUpdateInput,
  ) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete('/delete')
  @UseGuards(AbilitiesGuard)
  @CheckAbilities({ action: Action.Delete, subject: Task })
  @UseGuards(JwtAuthGuard)
  remove(@Body() data: DeleteTasksDto) {
    return this.taskService.remove(data.ids);
  }
}
