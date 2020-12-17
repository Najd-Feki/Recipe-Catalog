import { AuthService } from './../../services/auth.service';
import { Params, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../../services/recipe.service';
import { ShoppinglistService } from './../../services/shoppinglist.service';
import { Recipe } from '../../model/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id = 0 
  length = this.recipeService.getRecipes().length;

  constructor(public shoppingListService: ShoppinglistService, public route: ActivatedRoute, public recipeService: RecipeService, public auth: AuthService) { }

  ngOnInit() {
    //listen and get recipe from route params id
    const id = this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.recipe = this.recipeService.getRecipe(this.id)
    })

    // listen and subscribe to recipe changes and update through observable
    this.recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipe = recipe[this.id]
      })
  }

  //add ingredients to shopping list
  addToShoppingList() {
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredients(ingredient)
    })
  }

  // delete a recipe
  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.id)
  }

}




