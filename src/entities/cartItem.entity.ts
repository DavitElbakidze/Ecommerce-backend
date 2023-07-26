import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItems {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  product: 'productId'; // needed join
  @Column()
  discount: 'discountId'; // needed join
  @Column()
  quantity: number;
  @Column()
  totalPrice: number;
  @Column()
  user: 'userId'; // needed join
}
