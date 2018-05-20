import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../models/recipe';
import { RecipeServiceService } from './../services/recipe-service.service';

import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { trashcan } from 'octicons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe; 

  binIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.binIcon = this.sanitizer.bypassSecurityTrustHtml(trashcan.toSVG());
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id);
  }

}
