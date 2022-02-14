import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsEntity } from './entities/sections.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionsEntity])],
})
export class SectionsModule {}
