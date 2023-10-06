import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {

  constructor(
    @InjectRepository(Ingredient) private readonly ingredientRepository: Repository<Ingredient>,
  ) { }

  create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const ingredient: Ingredient = new Ingredient();
    ingredient.id = createIngredientDto.id;
    ingredient.image = createIngredientDto.image;
    ingredient.name = createIngredientDto.name;
    return this.ingredientRepository.save(ingredient);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  findOne(id: number): Promise<Ingredient> {
    return this.ingredientRepository.findOneBy({ id });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const ingredient: Ingredient = new Ingredient();
    ingredient.image = updateIngredientDto.image;
    ingredient.name = updateIngredientDto.name;
    ingredient.id = id;
    return this.ingredientRepository.save(ingredient);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.ingredientRepository.delete(id);
  }
}
