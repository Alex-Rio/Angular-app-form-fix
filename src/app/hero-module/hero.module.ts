import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroService } from './service/hero.service';

@NgModule({
  declarations: [HeroDetailComponent, HeroFormComponent, HeroesComponent ],
  imports: [
    CommonModule, FormsModule, HttpClientModule, HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
 exports: [
  HeroDetailComponent, HeroesComponent, HeroFormComponent
 ],
  providers: [
  HeroService , InMemoryDataService
  ]
})
export class HeroModule { }
