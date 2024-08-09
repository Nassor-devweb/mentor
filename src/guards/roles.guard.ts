import { CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Roles } from "src/decorateurs/roles";


export class RolesGuard implements CanActivate {

    constructor(private reflector : Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log(context.switchToHttp().getRequest().body)
        console.log('Handler:', context.getHandler());
        console.log('Reflector:', this.reflector);
        const roles = this.reflector.get<string[]>(Roles,context.getHandler())
        console.log("le guard ")
        console.log(roles)

        if(!roles){
            return true
        }
        const request = context.switchToHttp().getRequest()
        const userRoles = request.body.roles 



        return this.matchRoles(roles,userRoles);
    }


    matchRoles(rolesRequired : string[], userRoles : string[]) {
        const isAuthorized = rolesRequired.some((role) => userRoles.includes(role))
        if (!isAuthorized){
            throw new HttpException("Vous n'êtes pas autorizé à accéder à cette ressources", 403)
        }
        return true
    }
}