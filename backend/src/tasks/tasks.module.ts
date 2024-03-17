import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [PrismaModule]
})
export class TaskModule { }