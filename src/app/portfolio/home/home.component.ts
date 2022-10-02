import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolios!: Portfolio[];

  constructor() { }

  ngOnInit(): void {
    this.portfolios = [
      new Portfolio('demo1', 'demo1'),
      new Portfolio('demo2', 'demo2'),
    ];
  }

}
