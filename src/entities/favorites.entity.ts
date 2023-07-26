import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;
  productId: 'productId'; // needed join
  userId: 'userId'; // needed join
}
