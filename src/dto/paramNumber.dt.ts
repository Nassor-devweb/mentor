import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";


export class paramNumberDto {

    @IsInt({message : "Le paramètre doit être un nombre !!"})
    @Min(1,{message : "Le paramètre doit être un nombre supérieur à 0"})
    @Type(() => Number)
    id : number
}