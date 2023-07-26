import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum OrderStatus {
  preOrder = 0,
  canceled = 1,
  inDelivery = 2,
  done = 3,
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  user: 'userId'; // needed join
  @Column()
  cartItem: 'CartItem'; // needed join
  @Column()
  note: string;
  @Column()
  status: OrderStatus;
}
