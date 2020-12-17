import { Subject } from 'rxjs/Subject';
import { Recipe } from '../model/recipe.model'
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()
  recipes: Recipe[] = []
  constructor(){}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  //gets recipes and returns them
  getRecipes() {
    return this.recipes.slice()
  }

  removeRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  //finds a recipe by id
  getRecipe(index: number) {
    return this.recipes[index]
  }


  // adds a new recipe
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }




  // updates existing altered recipe
  // observable emits when changed and emits new slice
  upDateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }


}


