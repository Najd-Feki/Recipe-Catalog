import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApirecipeService } from 'app/services/apirecipe.service';
import { AuthService } from 'app/services/auth.service';
import { ShoppinglistService } from 'app/services/shoppinglist.service';

@Component({
  selector: 'app-api-recipes-details',
  templateUrl: './api-recipes-details.component.html',
  styleUrls: ['./api-recipes-details.component.css']
})
export class ApiRecipesDetailsComponent implements OnInit {

  recipe = null
  id: number; 

  constructor(public route: ActivatedRoute, public recipeService: ApirecipeService, public auth: AuthService , public shoppingListService : ShoppinglistService) { }

  ngOnInit() {
    //listen and get recipe from route params id
    console.log("aaaaa");
    
    const id = this.route.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.recipeService.getRecipeById(this.id).subscribe(recipe=>this.recipe=recipe)
    console.log(this.recipe);
    
    })

  }

  //add ingredients to shopping list
  addToShoppingList() {
    this.recipe.extendedIngredients.forEach(ingredient => {
      this.shoppingListService.addIngredients(ingredient)
    })
  }

}
