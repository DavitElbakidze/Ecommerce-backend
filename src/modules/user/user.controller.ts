import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dtos/createUser.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body(new ValidationPipe()) userDto: UserDto) {
    const user = await this.userService.createUser(userDto);
    return { message: 'User created succesfully', user };
  }

  @Get(':email')
  async findOne(@Param('email') email) {
    return await this.userService.findOne(email);
  }
}
