import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // We will store the instances of Recipe in this array which is of type Recipe....present in recipes/recipe.model.ts
  recipes : Recipe[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
