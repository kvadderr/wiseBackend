import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateReceipDto } from './dto/create-receip.dto';
import { UpdateReceipDto } from './dto/update-receip.dto';
import { HttpService } from '@nestjs/axios';
import OpenAI from "openai";

import { Receip } from './entities/receip.entity';
import { ReceipIngredient } from './entities/receipingredient.entity';

const openai = new OpenAI({
  apiKey: "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",
});

const format = {
  name: "some name",
  kkal: "Количество каллорий",
  protein: "Количество протеина",
  fats: "Количество жиров",
  carb: "Количество углеводов",
  time: "Время приготовления",
  ingredients: [
    {
      name: "название ингредиента",
      value: "измерение"
    }
  ],
  steps: [

  ]
}

@Injectable()
export class ReceipService {

  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Receip) private readonly receipRepository: Repository<Receip>,
    @InjectRepository(ReceipIngredient) private readonly receipIngredientRepository: Repository<ReceipIngredient>,) 
  {}
  
  async create(createReceipDto: CreateReceipDto) {
    const receip: Receip = new Receip();
    receip.name = createReceipDto.name;
    receip.activity = createReceipDto.activity;
    receip.carb = createReceipDto.carb;
    receip.categories = createReceipDto.categories;
    receip.fats = createReceipDto.fats;
    receip.goals = createReceipDto.goals;
    receip.image = createReceipDto.image;
    receip.kkal = createReceipDto.kkal;
    receip.protein = createReceipDto.protein;
    receip.steps = createReceipDto.steps;
    receip.time=createReceipDto.time
    const receipSaved = await this.receipRepository.save(receip);
    const receipId = receipSaved.id;
    
    const receipIngredients = createReceipDto.ingredients.map(data => {
      const receipingredient: ReceipIngredient = new ReceipIngredient();
      receipingredient.ingredient_id = data.id;
      receipingredient.receip_id = receipId;
      receipingredient.quantity = data.value;
      return receipingredient;
    }) 

    //this.receipIngredientRepository.save(receipIngredients);

    return receipSaved;
  }

  findAll(): Promise<Receip[]> {
    return this.receipRepository.find();
  }

  async generate(text: string) {
    console.log(text);
    const content = "Привет, придумай рецепт блюда "+text+". Ответ предоставь в формате JSON. Формат следующий: " + JSON.stringify(format, null, 2)
    console.log(content);
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: content
        }
      ],
      temperature: 0.5,
      max_tokens: 1024,
    });

    return response.choices[0].message.content;
  }

  findOne(id: number) {
    return `This action returns a #${id} receip`;
  }

  update(id: number, updateReceipDto: UpdateReceipDto) {
    return `This action updates a #${id} receip`;
  }

  remove(id: number) {
    return `This action removes a #${id} receip`;
  }
}
