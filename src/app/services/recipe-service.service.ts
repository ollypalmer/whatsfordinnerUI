import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './../models/recipe';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeServiceService {

  serverIp: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getRecipes(): Promise<Recipe[]> {
    return new Promise(resolve => {
      this.http.get(this.serverIp + 'recipes').subscribe((data: Recipe[]) => {
        console.log(data);
        resolve(data);
      });
    });
  }

  addRecipe(json: string) {
    //console.log(json);
    this.http.post(this.serverIp + 'recipe', json).subscribe()
  }

  deleteRecipe(id: string) {
    const url = this.serverIp + 'recipe/' + id;
    this.http.delete(url).subscribe(data => console.log(data));

  }

}
