import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';
import { EducationLevelsEntity } from '@modules/education-levels/entities/education-levels.entity';

@Entity('documents_education_levels')
export class DocumentsEducationLevelsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    () => DocumentsEntity,
    (document) => document.documentEducationLevel,
  )
  @JoinColumn({ name: 'document_id' })
  document: DocumentsEntity;

  @OneToOne(
    () => EducationLevelsEntity,
    (educationLevel) => educationLevel.documentsEducationLevels,
  )
  @JoinColumn({ name: 'education_level_id' })
  educationLevel: EducationLevelsEntity;
}
