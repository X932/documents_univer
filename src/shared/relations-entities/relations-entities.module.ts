import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsSubjectsEntity } from '@relations-entities/documents-subjects.relation';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relation';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentsGroupsEntity, DocumentsSubjectsEntity]),
  ],
})
export class RelationsEntitiesModule {}
