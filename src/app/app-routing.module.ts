import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './hero-module/dashboard/dashboard.component';
import { HeroesComponent } from './hero-module/heroes/heroes.component';
import { HeroDetailComponent } from './hero-module/hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-module/hero-form/hero-form.component';
import { FormGroupComponent } from './hero-module/form-group/form-group.component';
const routes: Routes = [
  {path: ' ', redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'form', component: FormGroupComponent},
  {path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroform', component: HeroFormComponent}
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
