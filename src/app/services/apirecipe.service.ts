import { Ingredient } from '../model/ingredient.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
@Injectable()

export class ApirecipeService {
  baseUrl: string = 'https://api.spoonacular.com/'
  httpparams : HttpParams 

  constructor(private http : HttpClient) { 
    
  }
getRecipeById(id : number) : Observable<any>{
  var ids = id.toString()
  this.httpparams= new HttpParams()
  .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
  .append("id",ids)
  return this.http.get(this.baseUrl+ 'recipes/' + ids +'/information',{params :this.httpparams});

}

  getRandom() : Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("query","pasta")
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }


  getRecipeByName(name : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("query",name)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }
  
  getRecipeByCuisine(cuisine : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("cuisine",cuisine)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }
  
  getRecipeByIngredients(ingredient : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("ingredients",ingredient)
    return this.http.get(this.baseUrl+ 'recipes/findByIngredients',{params :this.httpparams});
  }
  
  getIngredientsByName(name : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("query",name)
    return this.http.get(this.baseUrl+ 'food/ingredients/search',{params :this.httpparams});
  }
  
  getRecipeByMaxCarbs(number : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("maxCarbs",number)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }

  getRecipeByMinCarbs(number : string): Observable<any>{
        this.httpparams= new HttpParams()
      .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
      .append("minCarbs",number)
      return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }


  getRecipeByMaxProtein(number : string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("maxProtein",number)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }

  getRecipeByMinProtein(number: string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("minProtein",number)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }

  getRecipeByMaxCalories(number: string ): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("minCalories",number)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }

  getRecipeByMinCalories(number: string): Observable<any>{
    this.httpparams= new HttpParams()
    .append("apiKey","863334e0901f4d04ad56d2259acb89d7")
    .append("maxCalories",number)
    return this.http.get(this.baseUrl+ 'recipes/complexSearch',{params :this.httpparams});
  }

}
