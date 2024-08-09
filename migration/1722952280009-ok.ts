import { MigrationInterface, QueryRunner } from "typeorm";

export class Ok1722952280009 implements MigrationInterface {
    name = 'Ok1722952280009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`subject_entity\` ADD UNIQUE INDEX \`IDX_1380fa88fa7bb134c30d8c083b\` (\`levelId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_1380fa88fa7bb134c30d8c083b\` ON \`subject_entity\` (\`levelId\`)`);
        await queryRunner.query(`ALTER TABLE \`subject_entity\` ADD CONSTRAINT \`FK_1380fa88fa7bb134c30d8c083b9\` FOREIGN KEY (\`levelId\`) REFERENCES \`level_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        // Vérifiez d'abord si la clé étrangère existe
        const foreignKeyExists = await queryRunner.query(`
            SELECT CONSTRAINT_NAME 
            FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
            WHERE TABLE_NAME = 'subject_entity'
            AND CONSTRAINT_NAME = 'FK_1380fa88fa7bb134c30d8c083b9'
        `);
    
        if (foreignKeyExists.length > 0) {
            await queryRunner.query(`ALTER TABLE \`subject_entity\` DROP FOREIGN KEY \`FK_1380fa88fa7bb134c30d8c083b9\``);
        }
    
        await queryRunner.query(`DROP INDEX \`REL_1380fa88fa7bb134c30d8c083b\` ON \`subject_entity\``);
        await queryRunner.query(`ALTER TABLE \`subject_entity\` DROP INDEX \`IDX_1380fa88fa7bb134c30d8c083b\``);
    }

}
