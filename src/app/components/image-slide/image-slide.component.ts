import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({
         transform: 'translateX(0)',
         opacity: 1
      })),
      state('showText', style({
        opacity: 1
     })),
    ]),
  ]
})
export class ImageSlideComponent implements OnInit {
  @Input()
  slider: any;
  index = 0;
  constructor() { }


  handleNext(): void {
    if (this.index < this.slider.slides.length - 1){
      this.index ++;
    } else {
      this.index = 0;
    }
  }

  handlePrev(): void {
    if (this.index > 0){
    this.index --;
    } else {
      this.index = this.slider.slides.length - 1;
    }
  }

  ngOnInit(): void {
    console.log(this.slider);
  }
}
