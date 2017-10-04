import { Component } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder, Validators } from '@angular/forms';
import {TaxPeoplePickerComponent} from './modules/reactive-people-picker/tax-people-picker-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Test';
  sampleFormGroup:FormGroup;
  
  //event handler that will let me know once a person has been selected:
	peoplePickedEventHandler(idAccount:string){
		
	 alert('Account Selected :'+idAccount);
	}
	
	onSubmtit(){
	}
	constructor(private fb:FormBuilder){
		this.createForm();
	}
	
	createForm() {
		this.sampleFormGroup = this.fb.group({
			ParentPickerGroup:TaxPeoplePickerComponent.buildItem()
			});
	}
	
	
}
