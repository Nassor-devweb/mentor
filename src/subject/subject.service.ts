import { Injectable } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { InterfacePostSubject, InterfaceSubject } from './subjects';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {

    constructor(@InjectRepository(SubjectEntity) private SubjectRepository : Repository<SubjectEntity>){}


    async createSubject(name : string) : Promise<SubjectEntity> {

        const subjectCreated = await this.SubjectRepository.save({name})
        return subjectCreated

    }

    async findOneById(id: number): Promise<SubjectEntity | string> {
        const subject = await this.SubjectRepository.findOneBy({ id });
        return subject ? subject : 'ID NOT FOUND';
    }


    async findAll() : Promise<SubjectEntity[]>  {
        return await this.SubjectRepository.find();
    }

    async levelAndSubjectFromName(name : string){
        const subject = await this.SubjectRepository.findOneBy({name})
        return subject
    }

}
