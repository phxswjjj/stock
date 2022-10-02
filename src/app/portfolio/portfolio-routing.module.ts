import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const homeRoute: Route = {
  path: 'portfolio', component: HomeComponent,
  data: {
    display: '首頁',
    sort: 0,
  }
}

const routes: Routes = [homeRoute];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
