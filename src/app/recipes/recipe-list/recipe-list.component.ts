import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeSelectes = new EventEmitter<Recipe>();

  recipeWasSelected(recipe: Recipe){
this.recipeSelectes.emit(recipe);
  }


  // We will store the instances of Recipe in this array which is of type Recipe....present in recipes/recipe.model.ts
  recipes : Recipe[] = [
    new Recipe("A test Recipe","This is first Recipe test", "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY2lwZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"),
    new Recipe("A test Recipe","This is first Recipe test", "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
