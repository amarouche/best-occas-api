import { Category } from "src/category/category.entity";
import { User } from "./../user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNumber, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

@Entity()
export class Posts {
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
  @IsNotEmpty()
  imgs: string[];
  
  @ManyToOne(() => Category, category => category.posts)
  @IsNumber()
  category: Category;

  @ManyToOne(() => User, user => user.posts, {nullable:true})
  @IsNumber()
  user: User;
  
  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}