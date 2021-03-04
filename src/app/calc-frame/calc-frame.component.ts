import { ThisReceiver } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc-frame',
  templateUrl: './calc-frame.component.html',
  styleUrls: ['./calc-frame.component.css']
})
export class CalcFrameComponent implements OnInit {

  constructor() {
  
   }

  ngOnInit(): void {
  }

  result = 0;
  operations ="0";
  operatorCharacter = ['+', '-', '*', '/'];
  clearOperations() {
    this.operations = '0'
  }

  clearResults() {
    this.result = 0;
  }

  // Appends new numbers as new event inputs are added
  processInput(inputValue: string) {

    // Run code if AC or CE is pressed
    if (inputValue == 'ac') {
      this.clearOperations();
      this.clearResults();
    } else if (inputValue == 'ce') {
      this.clearOperations();
    }    

    // Run this if operations and result is empty
    else if (this.operations == '0' && this.result == 0) {
      // Disallow appending symbols if operations and result is empty
      if (! (this.operatorCharacter.includes(inputValue) || inputValue == '=')){
        this.operations = inputValue;
      }
    } else if (this.operations != '0' && this.result == 0) {
      // Run if operations is not empty and result is empty
      
      console.log(this.operations.charAt(this.operations.length -1));
      // Disallows duplication of symbols
      if (this.operatorCharacter.includes(this.operations.charAt(this.operations.length -1)) && this.operatorCharacter.includes(inputValue)){
        
      }
      // If input is not equals, append
      else if (inputValue != '=' ) {
        this.operations += inputValue;
        console.log("What")
      }

      // Evaluate expression if last value is not a symbol
      if (!this.operatorCharacter.includes(this.operations.charAt(this.operations.length - 1)) && inputValue == "=") {
        this.result = eval(this.operations);
        this.operations = '0';
        console.log(this.result);
      }
    }
    // Run if operations is not empty and results is not empty
    else  {

      
      // Disallows duplication of symbols
      if (this.operatorCharacter.includes(this.operations.charAt(this.operations.length -1)) && this.operatorCharacter.includes(inputValue)){
        
      }
      // If input is not equals, append
      else if (inputValue != '=' ) {

        // If operations is empty
      if (this.operations == '0') {
        this.operations = inputValue;

      } else {
        this.operations += inputValue;
      }
       
      }

      // Evaluate expression if last value is not a symbol
      if (!this.operatorCharacter.includes(this.operations.charAt(this.operations.length - 1)) && inputValue == "=") {
        // Combine result and operations when the first operation is a symbol
        if (this.operatorCharacter.includes(this.operations.charAt(0))) {
          this.result = eval(this.result + this.operations);
          this.operations = '0';
        } else {
          this.result = eval(this.operations);
          this.operations = '0';
        }
       
        console.log(this.result);
      }
    }

  }
  

}
