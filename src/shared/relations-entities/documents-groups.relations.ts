import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';

@Entity('documents_groups')
export class DocumentsGroupsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DocumentsEntity, (documents) => documents.documentsGroups)
  @JoinColumn({ name: 'document_id' })
  document: DocumentsEntity;

  @Column({ name: 'group_id' })
  groupId: number;
}
