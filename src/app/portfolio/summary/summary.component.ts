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
      code: '2330',
      name: '台積電',
      price: 445,
    });
    this.items.push({
      code: '2454',
      name: '聯發科',
      price: 599,
    });
  }

}
