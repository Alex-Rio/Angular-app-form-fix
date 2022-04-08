import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroService } from './service/hero.service';
@NgModule({
  declarations: [HeroDetailComponent, HeroFormComponent, HeroesComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ],
 exports: [
  HeroDetailComponent, HeroesComponent, HeroFormComponent
 ],
  providers: [
  HeroService
  ]
})
export class HeroModule { }
