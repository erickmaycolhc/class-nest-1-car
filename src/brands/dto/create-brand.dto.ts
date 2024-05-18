import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MinLength(1) //por lo menos tiene que tener una letra
  name: string;
}
