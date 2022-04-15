import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { AppRoutingModule } from './app-routing.module';

import { PrimegnModule } from './primeGN/primegn/primegn.module';

=======
>>>>>>> Stashed changes
import { AppComponent } from './app.component';
import { HeroModule } from './hero-module/hero.module';
<<<<<<< Updated upstream
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, MessageComponent,],
  imports: [
   BrowserModule, AppRoutingModule, HttpClientModule,

  ],
  providers: [
    HeroModule, PrimegnModule,
=======
import { RouterModule } from '@angular/router';
import {PrimegnModule} from './hero-module/primeng.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroModule,
    RouterModule,
    PrimegnModule
>>>>>>> Stashed changes
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
