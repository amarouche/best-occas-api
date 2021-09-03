import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';
import { Product } from '../product/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Favorite } from 'src/favorite/favorite.entity';

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

  // @ApiProperty({ type: () => Product })
  @OneToMany(() => Product, product => product.user)
  product: Product[];

  @OneToMany(() => Favorite, favorites => favorites.user)
  favorites: Favorite[];

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

}