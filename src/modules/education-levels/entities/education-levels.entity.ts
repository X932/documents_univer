import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsEducationLevelsEntity } from '@relations-entities/documents-education-levels.relation';

@Entity('education_levels')
export class EducationLevelsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(
    () => DocumentsEducationLevelsEntity,
    (documentsEducationLevels) => documentsEducationLevels.educationLevel,
  )
  documentsEducationLevels: DocumentsEducationLevelsEntity;
}
