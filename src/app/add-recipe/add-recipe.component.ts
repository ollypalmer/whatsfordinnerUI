import { Component, OnInit } from '@angular/core';
import { Recipe } from './../models/recipe';
import { Ingredient } from './../models/ingredient';
import { Instruction } from './../models/instruction';

import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { plus } from 'octicons';
import { DomSanitizer } from '@angular/platform-browser';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  plusIcon: SafeHtml;
  recipeForm: FormGroup;

  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.plusIcon = this.sanitizer.bypassSecurityTrustHtml(plus.toSVG());
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: '',
      ingredients: this.fb.array([]),
      instructions: this.fb.array([])
    });
  }

  setIngredients(ingredients: Ingredient[]) {
    const ingredientFGs = ingredients.map(ingredient => this.fb.group(ingredient));
    const ingredientFormArray = this.fb.array(ingredientFGs);
    this.recipeForm.setControl('ingredients', ingredientFormArray);
  }

  addIngredient() {
    this.ingredients.push(this.fb.group(new Ingredient()));
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  };

  setInstructions(instructions: Instruction[]) {
    const instructionFGs = instructions.map(instruction => this.fb.group(instruction));
    const instructionFormArray = this.fb.array(instructionFGs);
    this.recipeForm.setControl('instructions', instructionFormArray);
  }

  addInstruction() {
    this.instructions.push(this.fb.group(new Instruction));
  }

  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  };

  rebuildForm() {
    this.recipeForm.reset({
      name: this.recipe.name
    });
    this.setIngredients(this.recipe.ingredients);
    this.setInstructions(this.recipe.instructions);
  }

  get diagnostic() { return JSON.stringify(this.recipeForm.value); }
}
