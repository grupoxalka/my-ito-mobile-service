import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.usersService.createUser(name);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body('name') name: string) {
    return this.usersService.updateUser(id, name);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Patch(':id/name')
  updateUserName(@Param('id') id: string, @Body('name') name: string) {
    return this.usersService.updateUserName(id, name);
  }
}
