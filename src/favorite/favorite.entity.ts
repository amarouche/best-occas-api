import { Post } from "@nestjs/common";
import { Posts } from "src/posts/posts.entity";
import { User } from "src/user/user.entity";
import { CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number
  
  @OneToOne(() => User, user => user.id)
  user:User

  @OneToOne(() => Posts, post => post.id)
  post:Posts

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}