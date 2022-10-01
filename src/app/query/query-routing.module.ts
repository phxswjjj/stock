import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { TwStockComponent } from './tw-stock/tw-stock.component';

const queryTwStockRoute: Route = {
  path: 'tw',
  component: TwStockComponent,
  data: {
    display: '台股'
  }
};

const routes: Routes = [queryTwStockRoute];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
