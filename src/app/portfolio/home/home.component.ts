import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public portfolios!: Portfolio[];

  constructor() { }

  ngOnInit(): void {
    this.portfolios = [
      {
        id: 'id1',
        name: 'demo1',
        detailCount: 4
      },
      new Portfolio('id2', 'demo2'),
      {
        id: 'id3',
        name: 'demo3',
        detailCount: 161,
      },
    ];
  }

}
