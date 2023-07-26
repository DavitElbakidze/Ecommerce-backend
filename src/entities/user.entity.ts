import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  unId: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  role: Role;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @Column({ nullable: true })
  isVerified?: boolean;

  @Column({ nullable: true })
  isDeleted?: boolean;
}

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager',
}
