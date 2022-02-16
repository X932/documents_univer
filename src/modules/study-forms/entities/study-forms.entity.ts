import { DocumentsStudyFormsEntity } from '@relations-entities/documents-study-forms.relation';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('study_forms')
export class StudyFormsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(
    () => DocumentsStudyFormsEntity,
    (documentStudyForm) => documentStudyForm.studyForm,
  )
  documentStudyForm: DocumentsStudyFormsEntity;
}
