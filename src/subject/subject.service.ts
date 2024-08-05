import { Injectable } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import { InterfacePostSubject, InterfaceSubject } from './subjects';

@Injectable()
export class SubjectService {


    // createSubject(subject : InterfacePostSubject) : InterfaceSubject[] {
    //     const lastId = SUBJECTS[SUBJECTS.length - 1]["id"]
    //     console.log(subject)
    //     const newSubject = {
    //         id : lastId + 1,
    //         name : subject.name
    //     }
    //     return [...SUBJECTS,newSubject]
    // }

    findOneById(id : number) : InterfaceSubject | string{
        const subject = SUBJECTS.find((sub) => {
            return sub.id == id
        })
        console.log(subject)
        return (subject) ? subject : " ID NOT FOUND";
    }


    findAll() : InterfaceSubject[] {
        return SUBJECTS
    }

}
