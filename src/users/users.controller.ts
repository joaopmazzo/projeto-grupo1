import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('user')
  createUser(@Body() data: { email: string; name: string }) {
    return this.userService.createUser(data);
  }
}
