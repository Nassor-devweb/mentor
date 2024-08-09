import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository : Repository<UserEntity>){}


    async findOneById(id : number) : Promise<UserEntity>{
        const user = await this.userRepository.findOneBy({id})
        return user
    }


}
