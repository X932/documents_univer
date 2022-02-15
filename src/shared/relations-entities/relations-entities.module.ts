import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relations';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentsGroupsEntity])],
})
export class RelationsEntitiesModule {}
