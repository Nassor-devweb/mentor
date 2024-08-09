import { forwardRef, Module } from '@nestjs/common';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { SubjectModule } from 'src/subject/subject.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';

@Module({
  exports : [LevelService],
  controllers: [LevelController],
  providers: [LevelService],
  imports : [forwardRef(() => SubjectModule), TypeOrmModule.forFeature([LevelEntity])]
})
export class LevelModule {

}
