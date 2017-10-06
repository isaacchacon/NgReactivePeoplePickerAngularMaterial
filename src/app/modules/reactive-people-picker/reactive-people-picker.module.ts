import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }        from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';

import {TaxPeoplePickerComponent} from './tax-people-picker-component';
import {SharepointListsWebService} from 'ng-tax-share-point-web-services-module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,BrowserAnimationsModule,MatTooltipModule ,
  MatAutocompleteModule,MatProgressBarModule
  ],
  declarations: [TaxPeoplePickerComponent],
  exports: [TaxPeoplePickerComponent],
  providers: [SharepointListsWebService]
})
export class ReactivePeoplePickerModule { }
