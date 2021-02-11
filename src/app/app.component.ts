import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: object;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData();
    this.dataService.data.subscribe(res => this.data = res);
  }
}
