import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';

@Entity('documents_groups')
export class DocumentsGroupsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocumentsEntity, (document) => document.documentsGroups)
  @JoinColumn({ name: 'document_id' })
  documents: DocumentsEntity;

  @Column({ name: 'group_id' })
  groupId: number;
}
