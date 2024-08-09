import { Type } from 'class-transformer';
import { IsInt, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Le nom doit être une chaîne de caractères !!' })
  name: string;

  @IsInt({message:"La valeur doit être un nombre !!"})
  @Min(18, { message: 'Vous devez être majeur !!' })
  @Type(() => Number)
  age: number;
}
