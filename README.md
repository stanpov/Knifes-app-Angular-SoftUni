# KnifesApp

##BACKEND - 
This project is using Firebase for manage the database

##FRONTEND -
For better view in this project I am using Angular Material UI
For the pop up messages I am using Hot Toast library.

##User guide:

-if you are logged in with (admin@admin.com) you have 2 more tabs to use.One is for messagess.In this tab when you will see all the messages that users send you questions.There you can delete the message and also you can answer the message.The other tab is Upload.In this tab the admin can upload new product to the page.Also you can delete item when you click to the item.

-If you are not logged in there is some restriction pages that are not allowed to visid.For example card-page,checkout-page.Also you cannot add product to do card because you need to be logged in to do this.The auth-guard will automatically rediret you to the login page and pop up will show with error messagge that you are not allowed to visit this page before you are logged in.

-If you are logged in you have full access to the page.You can view the item,you can add it to the card,you can see your card also.

-In contact page there is a form where you can ask the administrator your question.

-There is error handling all over the app.The pop up will show if user made a mistake for example not fill the all required fields.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
