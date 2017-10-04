# ReactivePeoplePickerAngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

This people picker is in abstracted layers, so that you could connect any backend and in theory this people picker should work with any back end. Current back end is a SharePoint 2010 web service (located in [NgSharePointWebServices](https://github.com/isaacchacon/NgSharePointWebServices).

This people picker trys to mimick the way Office 365 / SharePoint online people picker works, to some extent.

If you run the example (app.component), you will learn how to consume this people picker.

Features: 
-No postback / flickering.
- It is made utilizing the reactive forms from angular.
- It will work with mouse and / or keyboard arrows to select the people from the drop down list, and hit enter (or click) to make a selection .
-Resolves the entity at page load to see if the entity is still valid or not
-Currently the back end searches by email, login account, or display name, so it is a very powerful search.
-It implements angular material (2+ ) components, which were still in beta a few days ago - use with caution.
-Implements the progress bar from material design , so that it let's people know when the picker is busy looking up someone.
-Implements the autocomplete from material design, very nice control!
-Implements tooltips with the mdtooltip from material design, though you may want to customize the css (it's not the best as of now).
- It will try to resolve the person on the blur event.

TODO's / current drawbacks:.

How to use it : 





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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
