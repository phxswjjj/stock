import { DdmComponent } from './ddm/ddm.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const ddmRoute: Route = {
  path: 'ddm', component: DdmComponent,
  data: {
    display: 'DDM',
    sort: 1,
  }
};

const homeRoute: Route = {
  path: 'calc',
  children: [ddmRoute],
  data: {
    display: '工具',
    sort: 1,
    isDir: true,
  }
};
const routes: Routes = [homeRoute];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
