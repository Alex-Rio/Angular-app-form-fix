import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< Updated upstream
import { InMemoryDataService } from './service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
=======
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
>>>>>>> Stashed changes

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroService } from './service/hero.service';
<<<<<<< Updated upstream

@NgModule({
  declarations: [HeroDetailComponent, HeroFormComponent, HeroesComponent ],
  imports: [
    CommonModule, FormsModule, HttpClientModule, HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
=======
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormGroupComponent } from './form-group/form-group.component';
@NgModule({
  declarations: [HeroDetailComponent, HeroFormComponent, HeroesComponent, MessagesComponent, DashboardComponent, FormGroupComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule,
     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
>>>>>>> Stashed changes
  ],
 exports: [
  HeroDetailComponent, HeroesComponent, HeroFormComponent,

 ],
  providers: [
  HeroService , InMemoryDataService
  ]
})
export class HeroModule { }
