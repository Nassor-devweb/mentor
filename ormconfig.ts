import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { LevelEntity } from "src/level/entities/level.entity";
import { SubjectEntity } from "src/subject/entities/subject.entity";
import { UserEntity } from "src/user/entity/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

const options : DataSourceOptions = {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'mentor',
    migrations: ['./migration/*.js'],
    entities: [SubjectEntity,LevelEntity,UserEntity],
}

export const typeormModuleOptions : TypeOrmModuleOptions = {
    ...options,
    synchronize: true,
}

export const connectionSource = new DataSource(options)