import { IsString } from "class-validator";
import { Product } from "src/product/product.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['name'])
export class Category
{
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({length:100,nullable:false})
  @IsString()
  name: string;

  @Column({length:100,nullable:true})
  img: string;

  @ApiProperty({ type: () => Product })
  @OneToMany(() => Product, product => product.category)
  product: Product[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}