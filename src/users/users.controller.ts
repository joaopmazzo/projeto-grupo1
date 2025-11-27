import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() data: CreateUserDTO) {
    return this.userService.createUser(data);
  }

  @Get()
  getUsers(@Body() data: CreateUserDTO) {
    return this.userService.getUsers();
  }
}
