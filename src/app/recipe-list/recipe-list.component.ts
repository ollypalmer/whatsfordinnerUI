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

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
