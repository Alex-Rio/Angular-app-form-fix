import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroService } from './service/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MultiSelectModule } from 'primeng-lts/multiselect';
import { AccordionModule } from 'primeng-lts/accordion';
import { FocusTrapModule } from 'primeng-lts/focustrap';
import { TabMenuModule } from 'primeng-lts/tabmenu';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import { AutoCompleteModule } from 'primeng-lts/autocomplete';
import { PasswordModule } from 'primeng-lts/password';

import { DividerModule } from 'primeng-lts/divider';

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroFormComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
    FormGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    ButtonModule,
    FocusTrapModule,
    InputTextModule,
    TabMenuModule,
    AccordionModule,
    AutoCompleteModule,
    MultiSelectModule,
    PasswordModule,
    DividerModule,
  ],
  exports: [HeroDetailComponent, HeroesComponent, HeroFormComponent],
  providers: [HeroService, InMemoryDataService],
})
export class HeroModule {}
