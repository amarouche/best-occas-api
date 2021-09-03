import { Category } from "src/category/category.entity";
import { User } from "../user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNumber, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Favorite } from "src/favorite/favorite.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id:number

  @Column({length:100, nullable:false})
  @IsNotEmpty()
  @IsString()
  title:string
  
  @Column({type: 'text', nullable:false})
  @IsNotEmpty()
  @IsString()
  description:string

  @Column("text", { array: true })
  imgs: string[];
  
  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, category => category.product)
  category: Category;
  
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, user => user.product, {nullable:true})
  user: User;
  
  @OneToMany(() => Favorite, favorites => favorites.product)
  favorites: Favorite[];
  
  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}