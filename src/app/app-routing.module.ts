import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const rootRoute: Route = {
  path: '',
  component: AppComponent,
};

const routes: Routes = [
  rootRoute,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
