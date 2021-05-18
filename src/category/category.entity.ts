import { IsString } from "class-validator";
import { Posts } from "src/posts/posts.entity";
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

  @ApiProperty({ type: () => Posts })
  @OneToMany(() => Posts, post => post.category)
  posts: Posts[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}