import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { FocusTrapModule } from 'primeng/focustrap';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng-lts/autocomplete';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChipModule,
    FocusTrapModule,
    InputTextModule,
    TabMenuModule,
    AccordionModule,
    AutoCompleteModule,
  ],
  providers: [

  ]
})
export class PrimegnModule { }
