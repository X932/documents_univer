import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relations';

@Entity('documents')
export class DocumentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ name: 'front_page' })
  frontPage: string;

  @Column()
  description: string;

  @OneToOne(
    () => DocumentsGroupsEntity,
    (documentsGroups) => documentsGroups.document,
  )
  documentsGroups: DocumentsGroupsEntity;
}
