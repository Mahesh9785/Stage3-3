import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding Example';
  isDisabled=false;
  output='This is Property Binding';
  userInput='';
  returnValue='';
  out='';

  //show() function sets the value of isDisabled to false so the input field can be enabled and also throws an alert message.
  show(){
    this.isDisabled=false;
    alert('Hello');
  }

  //saveIt() function takes the user enteredValue and returns it using returnValue.
  saveIt(enteredValue:string){
    this.returnValue=enteredValue;
    return this.returnValue;
  }

  //save() function sets the value of isDisabled to true so the input field can be disabled and returns the value of userInput as out
  save(){
    this.isDisabled=true;
  }

}
