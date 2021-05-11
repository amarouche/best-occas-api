import { IsBoolean, IsString, Length } from 'class-validator';
import { Posts } from '../posts/posts.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({length: 100, nullable: false})
  @Length(1, 100)
  @IsString()
  email: string;

  @Column({length: 100, nullable: false})
  @Length(1, 100)
  @IsString()
  password: string;

  @Column({length: 100, nullable: false})
  @Length(1, 100)
  @IsString()
  firstName: string;

  @Column({length: 100, nullable: false})
  @Length(1, 100)
  @IsString()
  lastName: string;

  @Column({ default: true })
  @IsBoolean()
  isActive: boolean;

  @OneToMany(() => Posts, posts => posts.user)
  posts: Posts[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

}