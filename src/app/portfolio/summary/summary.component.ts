import { ETFItem, Item, TWSEItem, ItemType } from './item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  items: Item[] = [];
  get ItemType(): typeof ItemType {
    return ItemType;
  }

  constructor() { }

  ngOnInit(): void {
    this.items.push(new TWSEItem('2330', '台積電', 445));
    this.items.push(new TWSEItem('2454', '聯發科', 599, 612));
    this.items.push(new ETFItem('0050', '元大寶來台灣卓越50證券投資信託基金', 106.20, 102));
  }

}
