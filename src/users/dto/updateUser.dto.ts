import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Org } from 'src/org/org.schema';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  org?: Org;
}
