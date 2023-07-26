import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  product: 'productId'[]; // needed join
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  note: string;
  @Column()
  percent: number;
}
