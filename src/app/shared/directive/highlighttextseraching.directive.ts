import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlighttextseraching]'

})

// we need to change lifecycle hook apply on it
export class HighlighttextserachingDirective implements OnChanges {
 @Input() highlighttext = " "; //to bind decorator to store the value
 originalHTML = " ";

  constructor(
    private element : ElementRef
  ) { }

 ngOnChanges(changes: SimpleChanges): void {


  const {currentValue, firstChange} = changes['highlighttext']
  if(firstChange){
    this.originalHTML = this.element.nativeElement.innerHTML;
    return
  }

  if(currentValue){
    const regexp = new RegExp(`(${currentValue})`,'gi'); //if there is new value then it gives cuurentvalue and apply the color

    this.element.nativeElement.innerHTML = this.originalHTML.replace(regexp,
      `<span style="background-color:yellow">\$1</span>`
    )
  }
 }

}
