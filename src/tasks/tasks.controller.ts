import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuardInseguro, AuthGuardSeguro } from 'src/auth/guards/auth.guard';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/Tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @UseGuards(AuthGuardSeguro)
  createTask(@Req() req, @Body() data: CreateTaskDTO) {
    const userId = req.user.sub;
    return this.tasksService.createTask(userId, data);
  }

  @Put(':id')
  @UseGuards(AuthGuardSeguro)
  updateTask(
    @Req() req,
    @Param('id', ParseIntPipe) taskId: number,
    @Body() data: UpdateTaskDTO,
  ) {
    const userId = req.user.sub;
    return this.tasksService.updateTask(taskId, userId, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuardInseguro)
  async deleteTask(@Param('id', ParseIntPipe) taskId: number) {
    await this.tasksService.deleteTask(taskId);
    return { message: 'Tarefa deletada com sucesso' };
  }

  @Get(':id')
  @UseGuards(AuthGuardSeguro)
  getTask(@Req() req, @Param('id', ParseIntPipe) taskId: number) {
    const userId = req.user.sub;
    return this.tasksService.getTaskById(taskId, userId);
  }

  @Get()
  @UseGuards(AuthGuardSeguro)
  getUserTasks() {
    return this.tasksService.getUserTasks();
  }
}
