import { Controller,Get } from '@nestjs/common';
import { InterfaceLevelSubject } from './level';
import { LevelService } from './level.service';
import { Param } from '@nestjs/common';
import { log } from 'console';

@Controller('level')
export class LevelController {

    constructor(private readonly levelService : LevelService){
        
    }

    @Get("subject/:name")
    findLevelAndSubjectByName( @Param('name') name : string) : InterfaceLevelSubject | string {
        console.log(name)
        return this.levelService.findLevelAndSubjectByName(name) 
    } 
}
