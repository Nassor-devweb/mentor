import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService : UserService,
        private readonly jwtService : JwtService
    ){}

    async signIn(id : number , password : string){
        const user = await this.userService.findOneById(id)

        if(!user){
            throw new UnauthorizedException("Le mots de passe ou l'email est incorrect")
        }

        if(user.password === password){
            const payload = {id: user.id , username : user.username}
            return {
                acces_token : await this.jwtService.signAsync(payload),
                user
            }
        }
    }
}
