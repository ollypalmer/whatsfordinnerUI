import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ RecipeServiceService ]
})
export class RecipeListComponent implements OnInit {

  recipes: string[];

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
