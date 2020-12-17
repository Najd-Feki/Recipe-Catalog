
import { LogininRouteGuard } from './services/loginin-route.guard';
import { AuthService } from './services/auth.service';
import { DataStorageService } from './services/data-storage.service';
import { RecipeListTemplateComponent } from './recipes/recipe-list/recipe-item/recipe-list-template/recipe-list-template.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './services/recipe.service';
import { ShoppinglistService } from './services/shoppinglist.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './model/dropdown.directive';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import * as firebase from 'firebase';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ApiRecipesComponent } from './api-recipes/api-recipes.component';
import { ApiRecipesListComponent } from './api-recipes/api-recipes-list/api-recipes-list.component';
import { ApiRecipesItemComponent } from './api-recipes/api-recipes-list/api-recipes-item/api-recipes-item.component'
import { ApirecipeService } from './services/apirecipe.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiRecipesDetailsComponent } from './api-recipes/api-recipes-details/api-recipes-details.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeListTemplateComponent,
    RecipeEditComponent,
    LoginComponent,
    RegisterComponent,
    ApiRecipesComponent,
    ApiRecipesListComponent,
    ApiRecipesItemComponent,
    ApiRecipesDetailsComponent,
    SearchPipe



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ShoppinglistService, RecipeService, DataStorageService, AuthService, LogininRouteGuard, ApirecipeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
