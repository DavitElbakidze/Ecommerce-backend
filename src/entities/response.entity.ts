import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  status: number;

  @Column('json', { nullable: true })
  data: any;

  @Column('text', { array: true, nullable: true })
  errors: string[];
}
