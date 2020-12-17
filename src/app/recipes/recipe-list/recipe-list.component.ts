import { AuthService } from './../../services/auth.service';
import { RecipeService } from './../../services/recipe.service';
import { Recipe } from '../../model/recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  searchText : string
  recipes: Recipe[] = [];
  searchAttribute : string = "Search By"

  constructor(public recipeService: RecipeService, public auth: AuthService) { }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipes()
  }

  setSearchAttribute(text : string ) {
    this.searchAttribute=text;
  }
}




