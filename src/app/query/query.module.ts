import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { TwStockComponent } from './tw-stock/tw-stock.component';


@NgModule({
  declarations: [
    TwStockComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule
  ]
})
export class QueryModule { }
