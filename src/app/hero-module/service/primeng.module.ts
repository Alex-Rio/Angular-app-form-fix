
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MultiSelectModule} from 'primeng-lts/multiselect';
import {AccordionModule} from 'primeng-lts/accordion';
import {FocusTrapModule} from 'primeng-lts/focustrap';
import {TabMenuModule} from 'primeng-lts/tabmenu';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import {AutoCompleteModule} from 'primeng-lts/autocomplete';
import {PasswordModule} from 'primeng-lts/password';
import {DividerModule} from 'primeng-lts/divider'
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    FocusTrapModule,
    InputTextModule,
    TabMenuModule,
    AccordionModule,
    AutoCompleteModule,
    MultiSelectModule,
    PasswordModule,
    DividerModule

  ],
  providers: [

  ]
})
export class PrimegnModule { }
