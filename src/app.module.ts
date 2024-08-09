import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { LevelModule } from './level/level.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './subject/entities/subject.entity';
import { LevelEntity } from './level/entities/level.entity';
import { typeormModuleOptions } from 'ormconfig';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import envFile from 'environnement/envFile';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SubjectModule,
    LevelModule,
    TypeOrmModule.forRoot(typeormModuleOptions),
    ConfigModule.forRoot({
      load : [envFile],
      isGlobal : true
    }),
    AuthModule,
    UserModule,
    JwtModule.register({
      global : true,
      secret : "MY_SECRET",
      signOptions : {
        expiresIn : "3600s"
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  
}
