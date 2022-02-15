import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('education_levels')
export class EducationLevelsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
