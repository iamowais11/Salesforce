import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  alert('hello');
  changeHandler(event) {
    this.greeting = event.target.value;
  }
  
}