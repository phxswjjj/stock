import { Item } from './item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items.push({
      code: '0050',
      name: '元大台灣50',
    });
    this.items.push({
      code: '0056',
      name: '元大高股息',
    });
  }

}
