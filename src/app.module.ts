import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ReceipModule } from './receip/receip.module';
import { HttpModule } from '@nestjs/axios';
import { IngredientModule } from './ingredient/ingredient.module';

import { Ingredient } from './ingredient/entities/ingredient.entity';
import { Receip } from './receip/entities/receip.entity';
import { ReceipIngredient } from './receip/entities/receipingredient.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'Zsxdcf123',
      username: 'postgres',
      entities: [
        Ingredient,
        Receip,
        ReceipIngredient
      ],
      database: 'wise',
      synchronize: true,
      logging: true,
    }),
    ReceipModule,
    IngredientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
