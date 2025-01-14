import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Org } from 'src/org/org.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsString()
  org?: Org;
}
