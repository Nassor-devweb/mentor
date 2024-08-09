import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import {AuthService} from "./auth.service"


@Controller('auth')
export class AuthController {

    constructor(
        private readonly AuthService : AuthService,
    ){}

    @Post("/signin")
    signIn(@Body("id",ParseIntPipe) id : number, @Body("password") password : string){
        return this.AuthService.signIn(id,password)
    }
}
