import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/Tasks.dto';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Req() req, @Body() data: CreateTaskDTO) {
    const userId = req.user.sub;
    return this.tasksService.createTask(userId, data);
  }

  @Put(':id')
  updateTask(@Req() req, @Param('id', ParseIntPipe) taskId: number, @Body() data: UpdateTaskDTO) {
    const userId = req.user.sub;
    return this.tasksService.updateTask(taskId, userId, data);
  }

  @Delete(':id')
  async deleteTask(@Req() req, @Param('id', ParseIntPipe) taskId: number) {
    const userId = req.user.sub;
    await this.tasksService.deleteTask(taskId, userId);
    return { message: 'Tarefa deletada com sucesso' };
  }

  @Get(':id')
  getTask(@Req() req, @Param('id', ParseIntPipe) taskId: number) {
    const userId = req.user.sub;
    return this.tasksService.getTaskById(taskId, userId);
  }

  @Get()
  getUserTasks(@Req() req) {
    const userId = req.user.sub;
    return this.tasksService.getUserTasks(userId);
  }
}