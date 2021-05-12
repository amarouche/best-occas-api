
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.NODE_ENV== 'production' ? process.env.POSTGRES_HOST_PROD : process.env.POSTGRES_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.NODE_ENV == 'production' ? process.env.DATABASE_USERNAME_PROD : process.env.DATABASE_USERNAME,
  password: process.env.NODE_ENV == 'production' ? process.env.DATABASE_PASSWORD_PROD : process.env.DATABASE_PASSWORD,
  database: process.env.NODE_ENV == 'production' ? process.env.DATABASE_NAM_PROD : process.env.DATABASE_NAM,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
}