import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocumentsGroupsEntity } from '@relations-entities/documents-groups.relation';
import { DocumentsSubjectsEntity } from '@relations-entities/documents-subjects.relation';
import { DocumentsEducationLevelsEntity } from '@relations-entities/documents-education-levels.relation';
import { DocumentsSectionsEntity } from '@relations-entities/documents-sections.relation';
import { DocumentsStudyFormsEntity } from '@relations-entities/documents-study-forms.relation';

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

  @OneToMany(
    () => DocumentsGroupsEntity,
    (documentGroup) => documentGroup.documents,
  )
  documentGroup: DocumentsGroupsEntity[];

  @OneToOne(
    () => DocumentsSubjectsEntity,
    (documentSubject) => documentSubject.document,
  )
  documentSubject: DocumentsSubjectsEntity;

  @OneToOne(
    () => DocumentsEducationLevelsEntity,
    (documentEducationLevel) => documentEducationLevel.document,
  )
  documentEducationLevel: DocumentsEducationLevelsEntity;

  @OneToOne(
    () => DocumentsSectionsEntity,
    (documentSection) => documentSection.document,
  )
  documentSection: DocumentsSectionsEntity;

  @OneToOne(
    () => DocumentsStudyFormsEntity,
    (documentStudyForm) => documentStudyForm.document,
  )
  documentStudyForm: DocumentsStudyFormsEntity;
}
