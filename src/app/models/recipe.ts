import { ingredient } from './ingredient';

export class Recipe {
  id: string;
  ingredients: ingredient[];
  instructions: string[];
  recipeName: string;
}