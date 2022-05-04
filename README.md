# ComicShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Installing Bootstrap 

npm install bootstrap
npm install --save @ng-bootstrap/ng-bootstrap --legacy-peer-deps
npm install @angular/localize --legacy-peer-deps
ng add @angular/localize

<!-- In angular.json file add 
"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"] -->
    
npm install @popperjs/core --save

## Run Json Server First because API is in localhost:3000/posts

If json-server is not installed please use ###npm install -g json-server

json-server --watch db.json

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
