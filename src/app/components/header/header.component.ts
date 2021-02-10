import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'heron';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(data => this.title = data.title);
  }

}
