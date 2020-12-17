import { Recipe } from '../../../model/recipe.model';
import { Component, Input } from '@angular/core';
import { RecipeService } from 'app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})


export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() i: number;
  constructor(public recipeService : RecipeService){

  }
  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.i)
  }
}
