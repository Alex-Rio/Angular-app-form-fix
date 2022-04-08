import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PrimegnModule } from './primeGN/primegn/primegn.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroModule } from './hero-module/hero.module';
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, MessageComponent,],
  imports: [
   BrowserModule, AppRoutingModule, HttpClientModule,

  ],
  providers: [
    HeroModule, PrimegnModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
