import { Module } from '@nestjs/common';
import { DocumentsModule } from '@modules/documents/documents.module';
import { SectionsModule } from '@modules/sections/sections.module';
import { EducationLevelsModule } from '@modules/education-levels/education-levels.module';

@Module({
  imports: [DocumentsModule, SectionsModule, EducationLevelsModule],
})
export class ModulesModule {}
