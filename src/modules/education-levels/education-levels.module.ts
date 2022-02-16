import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationLevelsEntity } from './entities/education-levels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EducationLevelsEntity])],
})
export class EducationLevelsModule {}
