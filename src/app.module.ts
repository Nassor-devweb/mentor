import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SubjectModule,LevelModule,,TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'mentor',
    entities: [],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  
}
