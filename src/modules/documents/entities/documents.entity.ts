import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
