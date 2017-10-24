import { Injectable } from '@angular/core';

@Injectable()
export class RecipeServiceService {

  recipes: string[]  = ["one", "two", "three"];

  constructor() { }

  getRecipes(): string[] {
    return this.recipes;
  }

}
