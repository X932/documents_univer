import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sections')
export class SectionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column()
  content: string;
}
