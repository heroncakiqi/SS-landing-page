import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.scss'],
})
export class SingleImageComponent implements OnInit {
  @Input()
  item: any;

  constructor() { }

  ngOnInit(): void {

  }

}
