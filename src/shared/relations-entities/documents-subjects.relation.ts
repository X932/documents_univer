import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';

@Entity('documents_subjects')
export class DocumentsSubjectsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DocumentsEntity, (document) => document.documentSubject)
  @JoinColumn({ name: 'document_id' })
  document: DocumentsEntity;

  @Column({ name: 'subject_id' })
  subjectId: number;
}
