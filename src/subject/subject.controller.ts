import { Controller,Get, Body,Post, Param } from '@nestjs/common';
import {InterfaceSubject,InterfacePostSubject} from "./subjects"
import {SubjectService} from "./subject.service"
import {SUBJECTS} from "./bdd"

@Controller('subject')
export class SubjectController {

    constructor(private readonly SubjectService : SubjectService ){

    }

    @Get("findall")
    findAll() : InterfaceSubject[] {
        return this.SubjectService.findAll()
    }

    // @Post("addsubject")
    // addSubject(@Body() name: InterfacePostSubject) : InterfaceSubject[] {
    //     return this.SubjectService.createSubject(name)
    // }

    @Get("find/:id")
    findOneById(@Param() param) : InterfaceSubject | string{
        const id = param.id
        return this.SubjectService.findOneById(id)
    }
    
}
