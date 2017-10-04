import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }        from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdTooltipModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';

import {TaxPeoplePickerComponent} from './tax-people-picker-component';
import {SharepointListsWebService} from 'ng-tax-share-point-web-services-module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,BrowserAnimationsModule,MdTooltipModule ,
  MdAutocompleteModule,MdProgressBarModule
  ],
  declarations: [TaxPeoplePickerComponent],
  exports: [TaxPeoplePickerComponent],
  providers: [SharepointListsWebService]
})
export class ReactivePeoplePickerModule { }
