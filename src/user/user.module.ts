import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService],
  imports : [TypeOrmModule.forFeature([UserEntity])]
})
export class UserModule {}
