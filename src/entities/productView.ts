import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class ProductView {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { eager: true }) 
  @JoinColumn({ name: 'userId' }) 
  user: User;

  @ManyToOne(() => Product, { eager: true }) 
  @JoinColumn({ name: 'productId' }) 
  product: Product;
}

