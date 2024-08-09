import { LevelEntity } from "src/level/entities/level.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class SubjectEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @OneToOne((type) => LevelEntity, (level) => level.subject)
    @JoinColumn()
    level? : LevelEntity

}