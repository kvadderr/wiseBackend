import { Module } from '@nestjs/common';
import { ReceipService } from './receip.service';
import { ReceipController } from './receip.controller';
import { HttpModule } from '@nestjs/axios';

import { Receip } from './entities/receip.entity';
import { ReceipIngredient } from './entities/receipingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Receip, ReceipIngredient])],
  controllers: [ReceipController],
  providers: [ReceipService],
})
export class ReceipModule {}
