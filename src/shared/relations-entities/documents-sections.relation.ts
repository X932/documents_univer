import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';
import { SectionsEntity } from '@modules/sections/entities/sections.entity';

@Entity('documents_sections')
export class DocumentsSectionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DocumentsEntity, (document) => document.documentSection)
  @JoinColumn({ name: 'document_id' })
  document: DocumentsEntity;

  @OneToOne(
    () => SectionsEntity,
    (sectionEntity) => sectionEntity.documentSection,
  )
  @JoinColumn({ name: 'section_id' })
  section: SectionsEntity;
}
