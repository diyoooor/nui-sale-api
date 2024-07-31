import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  otherNames: string;

  @Column()
  pricePerBag: string;

  @Column()
  pricePerKg: string;

  @Column()
  imageUrl: string;
}
