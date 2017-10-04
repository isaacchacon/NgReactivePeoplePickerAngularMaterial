import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import {NgTaxServices} from 'ng-tax-share-point-web-services-module';
import {ReactivePeoplePickerModule} from './modules/reactive-people-picker/reactive-people-picker.module';
//import {SharepointListsWebService} from './modules/NgTaxServices/sharepoint-lists-web.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,NgTaxServices.forRoot(), HttpModule,ReactivePeoplePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
