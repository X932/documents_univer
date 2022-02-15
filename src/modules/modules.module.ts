import { Module } from '@nestjs/common';
import { DocumentsModule } from '@modules/documents/documents.module';
import { SectionsModule } from '@modules/sections/sections.module';
import { EducationLevelsModule } from '@modules/education-levels/education-levels.module';
import { StudyFormsModule } from '@modules/study-forms/study-forms.module';

@Module({
  imports: [
    DocumentsModule,
    SectionsModule,
    EducationLevelsModule,
    StudyFormsModule,
  ],
})
export class ModulesModule {}
