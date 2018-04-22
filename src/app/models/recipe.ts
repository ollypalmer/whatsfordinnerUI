import { Ingredient } from './ingredient';
import { Instruction } from './instruction';

export class Recipe {
  id = '';
  ingredients: Ingredient[] = [];
  instructions: Instruction[] = [];
  name = '';

  /*constructor(
    ingredients: ingredient[],
    instructions: string[],
    name: string
  ) {
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
  }*/
}
