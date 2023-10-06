import { Ingredient } from "src/ingredient/entities/ingredient.entity";

export class IngredientsDto {
    name: string;
    value: string;
    id: number;
}

export class CreateReceipDto {
    id: number;

    name: string;

    image: string;

    steps: string[];

    kkal: string;
    
    protein: string;

    fats: string;

    carb: string;

    time: string;
    
    categories: string[];

    goals: string[];

    activity: string[];

    ingredients: IngredientsDto[];
}
