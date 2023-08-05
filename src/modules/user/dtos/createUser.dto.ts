import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Role } from 'src/entities/user.entity';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @IsString()
  readonly image?: string;

  @IsPhoneNumber('GE', { message: 'Invalid phone number' })
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsEmail()
  readonly email: string;

  @IsEnum(Role)
  @IsOptional()
  readonly role: Role;

  @IsString()
  password: string;
  
}
