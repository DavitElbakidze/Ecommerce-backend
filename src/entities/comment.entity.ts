import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @Column()
  product: 'productId'; // needed join
  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDate: string;
  @Column()
  user: 'userId'; // needed join
}
