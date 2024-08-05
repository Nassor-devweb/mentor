import { Injectable } from '@nestjs/common';
import { InterfaceLevelSubject,InterfaceLevel } from './level';
import { SubjectService } from 'src/subject/subject.service';
import {LEVEL} from "./bdd"

@Injectable()
export class LevelService {

    constructor(private readonly SubjectService : SubjectService){
        
    }

    findLevelAndSubjectByName(name : string) : InterfaceLevelSubject | string {
        const currentLevel : InterfaceLevel = LEVEL.find((level) => {
            return level.name === name
        })

        if(currentLevel){
            const allSubject = this.SubjectService.findAll()
            const selectedSubject = allSubject.filter((level) => {
                return level.levelId === currentLevel["id"] 
            })
            return {
                "level" : currentLevel,
                "subject" : selectedSubject
            }
        }

        return "Subject NOT FOUND" 
    }
}
