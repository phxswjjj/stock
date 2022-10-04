import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './home/item.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
