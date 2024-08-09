import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable() // Assurez-vous d'utiliser le décorateur @Injectable
export class AuthGuard implements CanActivate {

    constructor(private jwtService : JwtService ){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request: any): Promise<boolean> {

        const jwt = request.headers.authorization?.split(" ")[1]
        try {
            const payload = await this.jwtService.verifyAsync(jwt, {
                secret : "MY_SECRET"
            })
            request["user"] = payload;
            return true
        }catch(error){
            throw new UnauthorizedException("Veuillez vous connecté !!")
        }
    }
}
