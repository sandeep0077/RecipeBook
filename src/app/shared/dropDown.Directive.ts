import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class dropDownDirective{

  @HostBinding('class.open')  isOpen:any = false;

    @HostListener('document:click', ['$event']) onDropdown(event:Event){
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
    } 

  constructor(private element: ElementRef){};

}