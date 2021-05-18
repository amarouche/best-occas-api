import { Category } from "src/category/category.entity";
import { User } from "./../user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNumber, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

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
  imgs: string[];
  
  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, category => category.posts)
  category: Category;
  
  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, user => user.posts, {nullable:true})
  user: User;
  
  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}