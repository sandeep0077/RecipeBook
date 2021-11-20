import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // We will store the instances of Recipe in this array which is of type Recipe....present in recipes/recipe.model.ts
  recipes : Recipe[] = [
    new Recipe("A tet Recipe","This is first Recipe test", "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY2lwZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
