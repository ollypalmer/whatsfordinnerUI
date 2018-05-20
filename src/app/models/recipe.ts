import { Ingredient } from './ingredient';

export class Recipe {
  id = '';
  ingredients: Ingredient[] = [new Ingredient];
  instructions: string[] = [""];
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
