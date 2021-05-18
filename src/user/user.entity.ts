import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';
import { Posts } from '../posts/posts.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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

  @Column({length: 100, nullable: false})
  @Length(1, 100)
  phone: string;

  @Column({ default: true })
  @IsBoolean()
  isActive: boolean;

  // @ApiProperty({ type: () => Posts })
  @OneToMany(() => Posts, posts => posts.user)
  posts: Posts[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

}