import { Component, OnInit } from '@angular/core';
import { ApirecipeService } from 'app/services/apirecipe.service';

@Component({
  selector: 'app-api-recipes-list',
  templateUrl: './api-recipes-list.component.html',
  styleUrls: ['./api-recipes-list.component.css']
})
export class ApiRecipesListComponent implements OnInit {

constructor(private apirecipeService : ApirecipeService) { }
recipes : any[] = []
searchText : string
searchAttribute : string = "Search By"
favouriteItem:any;
  ngOnInit() {
  this.getRandom()
}

getRandom() {  
  this.apirecipeService.getRandom().subscribe(list => this.recipes = list.results)
  }

setSearchAttribute(text : string ) {
    this.searchAttribute=text;
  }

getFav(event : any) {
this.favouriteItem=event
console.log(" fav item ",this.favouriteItem);

  }

Search() {
  console.log(this.searchAttribute);
  

switch (this.searchAttribute) {
  case "Recipe Name":
    this.apirecipeService.getRecipeByName(this.searchText).subscribe(list => this.recipes = list.results)
    break;
  case "Cuisine" :
    this.apirecipeService.getRecipeByCuisine(this.searchText).subscribe(list => this.recipes = list.results)
    break;
  case "Ingredients":
    this.apirecipeService.getRecipeByIngredients(this.searchText).subscribe(list => this.recipes = list)
    break;
  case "Ingredient Name":
    this.apirecipeService.getIngredientsByName(this.searchText).subscribe(list => this.recipes = list.results)
    break;  
  case "Max Carbs":
    this.apirecipeService.getRecipeByMaxCarbs(this.searchText).subscribe(list => this.recipes = list.results)
    break;
  case "Min Carbs":
    this.apirecipeService.getRecipeByMinCarbs(this.searchText).subscribe(list => this.recipes = list.results)
    break; 
  case "Max Protein":
    this.apirecipeService.getRecipeByMaxProtein(this.searchText).subscribe(list => this.recipes = list.results)
    break; 
  case "Min Protein":
    this.apirecipeService.getRecipeByMinProtein(this.searchText).subscribe(list => this.recipes = list.results)
    break; 
  case "Max Calories":
    this.apirecipeService.getRecipeByMaxCalories(this.searchText).subscribe(list => this.recipes = list.results)
    break;   
  case "Min Calories":
    this.apirecipeService.getRecipeByMinCalories(this.searchText).subscribe(list => this.recipes = list.results)
    break;
  default:
    break;
}
}
}
