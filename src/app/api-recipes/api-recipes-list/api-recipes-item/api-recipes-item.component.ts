import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'app/services/recipe.service';
import { DataStorageService } from 'app/services/data-storage.service';

@Component({
  selector: 'app-api-recipes-item',
  templateUrl: './api-recipes-item.component.html',
  styleUrls: ['./api-recipes-item.component.css']
})
export class ApiRecipesItemComponent implements OnInit {
  @Input() recipe : any
  @Input() i: number;
  @Output() item = new EventEmitter<any>()
  favourite : boolean = false
  constructor(public recipeService : RecipeService , public dss : DataStorageService) { }

  ngOnInit() {
    
  }

  addToFav(){
    console.log(this.favourite);
    
    if (this.favourite) {
      this.favourite=false;
      this.item.emit(null);
      this.recipeService.removeRecipe(this.recipe)
      this.dss.storeRecipes().subscribe()
    }
    else {
      this.favourite=true
      this.item.emit(this.recipe);
      this.recipeService.addRecipe(this.recipe)
      this.dss.storeRecipes()
      .subscribe();
    }
  }

}
