import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './../services/recipe-service.service';
import { Recipe } from './../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeServiceService ]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  addBool: boolean = true;

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.addBool = false;
    this.selectedRecipe = recipe;
  }

  addRecipe(): void {
    this.selectedRecipe = null;
    this.addBool = true;
  }

}
