import { QueryModule } from './query/query.module';
import { Inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { NavComponent } from './share/nav/nav.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { CalculatorModule } from './calculator/calculator.module';
import { environment } from 'src/environments/environment';
import { Page404Component } from './share/error/page404/page404.component';

export const EnvironmentToken = new InjectionToken('ENVIRONMENT');

declare let gtag: Function;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QueryModule,
    MenubarModule,
    PortfolioModule,
    CalculatorModule,
    AppRoutingModule,
  ],
  providers: [{ provide: EnvironmentToken, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(EnvironmentToken) private env: any) {
    gtag('config', this.env.google.GA_TRACKING_ID);
  }
}
