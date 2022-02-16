import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsStudyFormsEntity } from '@relations-entities/documents-study-forms.relation';
import { DocumentsSectionsEntity } from '@relations-entities/documents-sections.relation';
import { DocumentsEducationLevelsEntity } from '@relations-entities/documents-education-levels.relation';
import { DocumentsSubjectsEntity } from '@relations-entities/documents-subjects.relation';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relation';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DocumentsGroupsEntity,
      DocumentsSubjectsEntity,
      DocumentsEducationLevelsEntity,
      DocumentsStudyFormsEntity,
      DocumentsSectionsEntity,
    ]),
  ],
})
export class RelationsEntitiesModule {}
