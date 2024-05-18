//DTO data tranfers objects

import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  //Los DTO siempre son una clase

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
