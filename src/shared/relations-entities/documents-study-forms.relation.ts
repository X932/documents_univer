import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentsEntity } from '@modules/documents/entities/documents.entity';
import { StudyFormsEntity } from '@modules/study-forms/entities/study-forms.entity';

@Entity('documents_study_forms')
export class DocumentsStudyFormsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => DocumentsEntity, (document) => document.documentStudyForm)
  @JoinColumn({ name: 'document_id' })
  document: DocumentsEntity;

  @OneToOne(() => StudyFormsEntity, (studyForm) => studyForm.documentStudyForm)
  @JoinColumn({ name: 'study_form_id' })
  studyForm: StudyFormsEntity;
}
