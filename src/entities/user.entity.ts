import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER = 'manager',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ nullable: true })
  unId?: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  roles: Role;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDate: Date;

  @Column({ nullable: true, default: false })
  isVerified?: boolean;

  @Column({ nullable: true, default: false })
  isDeleted?: boolean;
}


