import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDTO,UpdateTaskDTO } from './dto/Tasks.dto';

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

  async updateTask(
    taskId: number,
    usuarioId: number,
    data: UpdateTaskDTO,
  ): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        usuarioId: usuarioId,
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async deleteTask(taskId: number, usuarioId: number): Promise<void> {
    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        usuarioId: usuarioId,
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    await this.prisma.task.delete({
      where: { id: taskId },
    });
  }

  async getTaskById(taskId: number, usuarioId: number): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        usuarioId: usuarioId,
      },
    });

    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return task;
  }

  async getUserTasks(usuarioId: number): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        usuarioId: usuarioId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}