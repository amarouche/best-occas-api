import { Product } from "src/product/product.entity";
import { User } from "src/user/user.entity";
import { CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number

  // @ApiProperty({ type: () => Product })
  @ManyToOne(() => Product, product => product.favorites, {nullable:true})
  product: Product;
  
  // @ApiProperty({ type: () => User })
  @ManyToOne(() => User, user => user.favorites, {nullable:true})
  user: User;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}