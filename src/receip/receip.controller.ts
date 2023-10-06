import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceipService } from './receip.service';
import { CreateReceipDto } from './dto/create-receip.dto';
import { UpdateReceipDto } from './dto/update-receip.dto';

@Controller('receip')
export class ReceipController {
  constructor(private readonly receipService: ReceipService) {}

  @Post()
  create(@Body() createReceipDto: CreateReceipDto) {
    return this.receipService.create(createReceipDto);
  }

  @Get()
  findAll() {
    return this.receipService.findAll();
  }

  @Get('/generate/:text')
  async generate(@Param('text') text: string) {
    return await this.receipService.generate(text);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceipDto: UpdateReceipDto) {
    return this.receipService.update(+id, updateReceipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receipService.remove(+id);
  }
}
