import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
    exports : [SubjectService],
    controllers : [SubjectController,SubjectController],
    providers : [SubjectService,SubjectService]
})
export class SubjectModule {}
