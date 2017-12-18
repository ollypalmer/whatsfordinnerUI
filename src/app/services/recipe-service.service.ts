import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './../models/recipe';

@Injectable()
export class RecipeServiceService {

  constructor(private http: HttpClient) { }

  getRecipes(): Promise<Recipe[]> {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/recipes').subscribe((data: Recipe[]) => {
        console.log(data);
        resolve(data);
      });
    });
  }

}
