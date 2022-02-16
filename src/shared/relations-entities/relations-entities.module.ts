import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsEducationLevelsEntity } from '@relations-entities/documents-education-levels.relation';
import { DocumentsSubjectsEntity } from '@relations-entities/documents-subjects.relation';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relation';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DocumentsGroupsEntity,
      DocumentsSubjectsEntity,
      DocumentsEducationLevelsEntity,
    ]),
  ],
})
export class RelationsEntitiesModule {}
