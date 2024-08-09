import { forwardRef, Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { LevelModule } from 'src/level/level.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entity';

@Module({
    exports : [SubjectService],
    controllers : [SubjectController],
    providers : [SubjectService],
    imports : [forwardRef(() => LevelModule),TypeOrmModule.forFeature([SubjectEntity])]
})
export class SubjectModule {}
