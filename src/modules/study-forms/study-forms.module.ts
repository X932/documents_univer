import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyFormsEntity } from './entities/study-forms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyFormsEntity])],
})
export class StudyFormsModule {}
