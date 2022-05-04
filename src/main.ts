import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 //ES6 Class Example in the Project 
  class Person {
    constructor(public firstName:string, public lastName:string) {
    }
  
    public name() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    protected whoAreYou() {
      return `Hi I'm ${this.name()}`;
    }
  }
  
  class Student extends Person {
    constructor(public override firstName:string, public override lastName:string, public course:string) {
      super(firstName, lastName);
    }
  
    override whoAreYou() {
      return `${super.whoAreYou()} and this is my final project for course ${this.course}`;
    }
  }
  
  let asim = new Student("Digvijay", "Singh", "MET CS 601");
  console.log(asim.whoAreYou());
