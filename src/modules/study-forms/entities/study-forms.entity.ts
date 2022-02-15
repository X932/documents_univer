import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('study_forms')
export class StudyFormsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
