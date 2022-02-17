import { Component, ElementRef, OnInit, Output, ViewChild , EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameRef: ElementRef;
  @ViewChild("amountInput") valueRef: ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameRef.nativeElement.value; 
    const ingValue = this.valueRef.nativeElement.value;
    const ingred = new Ingredient(ingName,ingValue)
   this.itemAdded.emit(ingred);
  }

}
