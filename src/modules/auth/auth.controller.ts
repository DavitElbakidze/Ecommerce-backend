import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { SignInDto } from './dtos/login.dto';
import { JwtAuthGuard } from './jwt.guard';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() data: SignInDto) {
    const foundUser = await this.usersService.findOne(data.email);
    if (!foundUser) {
      return {
        status: 'Error',
        message: 'Incorrect email or password',
      };
    }
    const jwtToken = await this.authService.login(foundUser);

    return {
      status: 'success',
      data: {
        role: foundUser.roles,
        email: foundUser.email,
        jwtToken,
      },
    };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.MANAGER)
  getProfile(@Req() req) {
    return req.user;
  }
}
