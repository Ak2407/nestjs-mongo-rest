import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrgDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  users?: string[];
}
