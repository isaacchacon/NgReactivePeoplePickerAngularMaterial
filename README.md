# ReactivePeoplePickerAngularMaterial

A People Picker in Angular 2+, Tries to emulate office 365 / SharePoint online's People picker, implements Angular's Reactive Forms and Angular Material, 

[NPM repository](https://www.npmjs.com/package/reactive-people-picker-angular-material)

This people picker is in abstracted layers, so that you could connect any backend and in theory this people picker should work with any back end. Current back end is a SharePoint 2010 web service (located in [NgSharePointWebServices](https://github.com/isaacchacon/NgSharePointWebServices).

This people picker tries to mimick the way Office 365 / SharePoint online people picker works, to some extent.

If you ran the attached example, you will learn how to consume this people picker.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

### Features: 

- No postback / flickering.
- It is made utilizing the reactive forms from angular.
- It will work with mouse and / or keyboard arrows to select the people from the drop down list, and hit enter (or click) to make a selection .
- Resolves the entity at page load to see if the entity is still valid or not
- Currently the back end searches by email, login account, or display name, so it is a very powerful search.
- It implements angular material (2+ ) components, which were still in beta a few days ago - use with caution.
- Implements the progress bar from material design , so that it let's people know when the picker is busy looking up someone.
- Implements the autocomplete from material design, very nice control!
- Implements tooltips with the mdtooltip from material design, though you may want to customize the css (it's not the best as of now).
- It will try to resolve the person on the blur event.
- Implements an output event "onPeoplePicked"
- current backend retrieves entries from user information list ( this is the backend project, located in [NgSharePointWebServices](https://github.com/isaacchacon/NgSharePointWebServices). ) 
- Utilizes angular material and angular 4+

### Screenshots:

New People picker:

![New People Picker](https://github.com/isaacchacon/NgReactivePeoplePickerAngularMaterial/raw/master/doc/1.png)


Search Results:

![Search Results](https://github.com/isaacchacon/NgReactivePeoplePickerAngularMaterial/raw/master/doc/SearchResults.png)


Hovering with tooltip detail:

![Hovering](https://github.com/isaacchacon/NgReactivePeoplePickerAngularMaterial/raw/master/doc/Hovering.png)

Resolved picker:

![Resolved Picker](https://github.com/isaacchacon/NgReactivePeoplePickerAngularMaterial/raw/master/doc/ResolvedPicker.png)

No results found:

![NoResultsFound](https://github.com/isaacchacon/NgReactivePeoplePickerAngularMaterial/raw/master/doc/NoResultsFound.png)


### TODO's / current drawbacks:.

- It utilizes bootstrap, `<link rel="stylesheet" href="assets/bootstrap3.3.7.min.css">`
- It does not support multiple people selection.
- The demo has an error (something like CheckedFailed , don't remember), but it seems to still work pretty well. I integrated the picker in other forms and that error is not showing at all.
- I'm sure there's more room to fix / enhance..
- The component code needs a total / cleaner rewrite, but it works as of now.
- Poor exception / error handling.

### Dependencies : 

if you run the demo from index.html, (I used angular-cli), you should be able to see at least the initial picker.
It won't show any results , you have to connect it to your back end

Trying to make memory, these are the steps that i followed to make this demo run:

1. Npm install reactive-people-picker-angular-material
2. Added bootstrap, and the indigo-pink.css from the animations:
  (the indigo pink can be grabbed from \node_modules\@angular\material\prebuilt-themes), i guess you could grab the other css and it should work. Or you should be able to customize your css. I am a material newbie, please excuse.
  `<link rel="stylesheet" href="/siteassets/bootstrap3.3.7.min.css">`
  `<link href="/siteassets/indigo-pink.css" rel="stylesheet">`
3. If you will utilize the back end of SharePoint web services, get them from the other [git hub](https://github.com/isaacchacon/NgSharePointWebServices) or [npm](https://www.npmjs.com/package/ng-tax-share-point-web-services-module) project
    if that is the case, i am utilizing JQuery ONLY to treat the xml from the web services results. 
    I am sure that you can do better than me, but i had to quickly treat xml, so go ahead and add this to your index.html or to your webpart code: `<script src="/siteassets/jquery-3.1.1.min.js"></script>`
4. then i did an ng serve.
### Dissecting the Demo:

The app.mosule has this relevant code:
NgTaxServices is added because my backend is SharePoint web services (asmx), but you may recode the tax-people-picker-business.ts in order to connect your own service / backend.
```
import {NgTaxServices} from 'ng-tax-share-point-web-services-module';
import {ReactivePeoplePickerModule} from './modules/reactive-people-picker/reactive-people-picker.module';
```
then , in the  imports we do an NgTaxServices.forRoot():
NgTaxServices is added because my backend is SharePoint web services (asmx), but you may recode the tax-people-picker-business.ts in order to connect your own service / backend.
```
imports: [
    BrowserModule,ReactiveFormsModule,NgTaxServices.forRoot(), HttpModule,ReactivePeoplePickerModule
  ],
```
Now onto the people picker code itself:

on app.component.html:

```
<people-picker 
(onPeoplePicked)="peoplePickedEventHandler($event);" 
controlId="samplePickerId" 
requiredMessage="Please enter a selection" 
[group]="sampleFormGroup.get('ParentPickerGroup')">
</people-picker>
```
we are consuming the output event 'onPeoplePicked', which is an output event . this is optional.
the controlId can really be anything i believe.
requiredMessage is an optional input parameter that if you don't specified, it should make the picker think that it's not required.
the important property to note is the group, which is initialized in the app.component.ts:

```
createForm() {
		this.sampleFormGroup = this.fb.group({
			ParentPickerGroup:TaxPeoplePickerComponent.buildItem()
			});
	}
```

The FormGroup is created through the static method 'buildItem' from TaxPeeoplePickerComponent.

Object UserInfoListEntry: this is the object that is bound and repreent a person either in the picker and in the autocomplete (drop down).

it has the following properties: title, jobtitle, name and email and i believe they match to the column names in SharePoint's user information list. It also has an id porperty, which is the id column in Sharepoint.

Example of an object instance that would come from a SharePoint 2010 backend:

id:1212
title:Adams, John
jobTitle: Manager3
name: Contoso\JAdams
email:John.Adams@contoso.com

```
	getItemProperties():string[]{	
		return ["title", "jobTitle",  "name", "email" ]
}
```

 ## Disclaimer:
 
 Use under your own risk, it has not been tested thoroughly.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

Use this under your own risk no warranties

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
