import { Body, Controller,Get, HttpException, HttpStatus, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common';
import { InterfaceLevelSubject } from './level';
import { LevelService } from './level.service';
import { Param, ValidationPipe} from '@nestjs/common';
import { LevelEntity } from './entities/level.entity';
import { CreateUserDto } from 'src/dto/createUser.td';
import { paramNumberDto } from 'src/dto/paramNumber.dt';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorateurs/roles';
import { RolesGuard } from 'src/guards/roles.guard';

@Controller('level')
// @UseGuards(RolesGuard)
//@UseGuards(new AuthGuard())
@UseGuards(AuthGuard)
export class LevelController {

    constructor(private readonly levelService : LevelService){
        
    }


    @Post()
    @Roles(["admin"])
    createUser(@Body() body : CreateUserDto){
        console.log(typeof body.age)
        console.log(typeof body.name)

        return body

    }

    @Get(":id")
    test(@Param() id : paramNumberDto){
        console.log(typeof id.id)
        return id
    }

    // @Get("subject/:name")
    // findLevelAndSubjectByName( @Param('name') name : string) : InterfaceLevelSubject | string {
    //     console.log(name)
    //     return this.levelService.findLevelAndSubjectByName(name) 
    // } 

    @Get()
    async findAll() : Promise<LevelEntity[]>{
        return await this.levelService.findallAll()
    }
}
