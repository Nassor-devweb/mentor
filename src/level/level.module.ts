import { Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { SubjectModule } from 'src/subject/subject.module';

@Module({
  exports : [LevelService],
  imports : [SubjectModule],
  controllers: [LevelController],
  providers: [LevelService]
})
export class LevelModule {

}
