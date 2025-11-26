import { Injectable } from '@nestjs/common';
import { Task } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDTO } from './dto/createTasks.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(usuarioId: number, data: CreateTaskDTO): Promise<Task> {
    return this.prisma.task.create({
      data: {
        ...data,
        usuario: {
          connect: {
            id: usuarioId,
          },
        },
      },
    });
  }
}
