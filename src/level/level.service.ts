import { Injectable } from '@nestjs/common';
import { InterfaceLevelSubject,InterfaceLevel } from './level';
import { SubjectService } from 'src/subject/subject.service';
import {LEVEL} from "./bdd"
import { InjectRepository } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LevelService {

    constructor(private readonly SubjectService : SubjectService,
        @InjectRepository(LevelEntity) private LevelEntityRepository : Repository<LevelEntity>,
        private ConfigService : ConfigService,
    ){}

    async findallAll() : Promise<LevelEntity[]>{
        return await this.LevelEntityRepository.find()
    }

    testEnv(){
        return this.ConfigService.get("database.host")
    }

    // findLevelAndSubjectByName(name : string) : InterfaceLevelSubject | string {
    //     const currentLevel : InterfaceLevel = LEVEL.find((level) => {
    //         return level.name === name
    //     })

    //     if(currentLevel){
    //         const allSubject = this.SubjectService.findAll()
    //         const selectedSubject = allSubject.filter((level) => {
    //             return level.levelId === currentLevel["id"] 
    //         })
    //         return {
    //             "level" : currentLevel,
    //             "subject" : selectedSubject
    //         }
    //     }

    //     return "Subject NOT FOUND" 
    // }
}
