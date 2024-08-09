import { Controller,Get, Body,Post, Param } from '@nestjs/common';
import {InterfaceSubject,InterfacePostSubject} from "./subjects"
import {SubjectService} from "./subject.service"
import {SUBJECTS} from "./bdd"
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';
import { Repository } from 'typeorm';

@Controller('subject')
export class SubjectController {

    constructor(private readonly SubjectService : SubjectService,
        @InjectRepository(SubjectEntity) private SubjectRepository : Repository<SubjectEntity>
     ){

    }

    @Get("findall")
    async findAll() : Promise<SubjectEntity[]>{
        return await this.SubjectService.findAll()
    }

    // @Post("addsubject")
    // addSubject(@Body() name: InterfacePostSubject) : InterfaceSubject[] {
    //     return this.SubjectService.createSubject(name)
    // }

    @Get("find/:id")
    async findOneById(@Param() param : {id : number}) : Promise<SubjectEntity | string>{
        const id = param.id
        return await this.SubjectService.findOneById(id)
    }

    @Post()
    async createSubject(@Body() body : {name : string}) : Promise<SubjectEntity>{
        return await this.SubjectService.createSubject(body.name)
    }
    
}
