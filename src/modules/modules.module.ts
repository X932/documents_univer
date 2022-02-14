import { Module } from '@nestjs/common';
import { DocumentsModule } from '@modules/documents/documents.module';
import { SectionsModule } from '@modules/sections/sections.module';

@Module({
  imports: [DocumentsModule, SectionsModule],
})
export class ModulesModule {}
