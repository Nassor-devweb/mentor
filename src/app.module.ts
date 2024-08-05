import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { SubjectModule } from './subject/subject.module';
import { LevelService } from './level/level.service';
import { LevelModule } from './level/level.module';

@Module({
  imports: [SubjectModule,LevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
