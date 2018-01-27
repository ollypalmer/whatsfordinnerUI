import { Component, OnInit } from '@angular/core';
import { Recipe } from './../models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor() { }

  addInstruction(instruction) {
    this.recipe.instructions.push(instruction);
    console.log(this.recipe.instructions);
  }

  ngOnInit() {
  }

}
