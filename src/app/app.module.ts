import { QueryModule } from './query/query.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { NavComponent } from './share/nav/nav.component';
import { PortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    QueryModule,
    MenubarModule,
    PortfolioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
