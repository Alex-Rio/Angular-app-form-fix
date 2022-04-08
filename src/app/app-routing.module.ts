import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './hero-module/heroes/heroes.component';
import { HeroDetailComponent } from './hero-module/hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-module/hero-form/hero-form.component';
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'herodetail', component: HeroDetailComponent},
  {path: 'heroform', component: HeroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
