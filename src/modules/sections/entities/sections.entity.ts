import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsSectionsEntity } from '@relations-entities/documents-sections.relation';

@Entity('sections')
export class SectionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column()
  content: string;

  @OneToOne(
    () => DocumentsSectionsEntity,
    (documentSection) => documentSection.section,
  )
  documentSection: DocumentsSectionsEntity;
}
