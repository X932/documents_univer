import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relation';
import { DocumentsSubjectsEntity } from '@relations-entities/documents-subjects.relation';
import { DocumentsEducationLevelsEntity } from '@relations-entities/documents-education-levels.relation';

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

  @OneToOne(
    () => DocumentsSubjectsEntity,
    (documentsSubjects) => documentsSubjects.document,
  )
  documentsSubjects: DocumentsSubjectsEntity;

  @OneToOne(
    () => DocumentsEducationLevelsEntity,
    (documentsEducationLevels) => documentsEducationLevels.document,
  )
  documentsEducationLevels: DocumentsEducationLevelsEntity;
}
