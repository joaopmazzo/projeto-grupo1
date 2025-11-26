import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateTaskDTO } from './dto/createTasks.dto';
import { TasksService } from './tasks.service';

@Controller('task')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createPosts(@Req() req, @Body() data: CreateTaskDTO) {
    const userId = req.user.sub;
    return this.tasksService.createTask(userId, data);
  }
}
