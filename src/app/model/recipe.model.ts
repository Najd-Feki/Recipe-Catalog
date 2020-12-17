import { Ingredient } from './ingredient.model';
/**
 * Recipe blueprint
 */
export interface Recipe {
   name: string;
   description: string;
   imagePath: string;
   ingredients: Ingredient[];
}
