import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
 
 @Output() recipeSelected = new EventEmitter<void>();
 
  selectedRecipe(){
    this.recipeSelected.emit();
  }

  @Input() recipe:Recipe

  constructor() { }

  ngOnInit(): void {
  }

}
