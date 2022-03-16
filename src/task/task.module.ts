import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { CaslModule } from '../casl/casl.module';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [CaslModule],
  controllers: [TaskController],
  providers: [TaskService, PrismaService],
})
export class TaskModule {}
