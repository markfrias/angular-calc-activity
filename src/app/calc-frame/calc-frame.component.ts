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

  // Appends new numbers as new event inputs are added
  processInput(inputValue: string) {
    // Block more 0 inputs if the only operation is 0
    if (this.operations == '0' && inputValue == '0') {
      return;
    } else if (this.operations == '0') {
      // Replace zero as first operator
      this.operations = inputValue;
      return;
    }
    this.operations += inputValue;
  }
  

}
