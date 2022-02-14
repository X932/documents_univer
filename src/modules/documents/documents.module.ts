import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsEntity } from './entities/documents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentsEntity])],
})
export class DocumentsModule {}
