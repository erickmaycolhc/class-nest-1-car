//DTO data tranfers objects

import { IsString } from 'class-validator';

export class CreateCarDto {
  //Los DTO siempre son una clase

  @IsString({ message: 'The brand most be a cool string ' })
  readonly brand: string;

  @IsString()
  readonly model: string;
}
