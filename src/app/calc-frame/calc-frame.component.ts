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
  operations ="1";

  // Appends new numbers as new event inputs are added
  processInput(inputValue: string) {
    this.operations += inputValue;
    console.log("operations: " + this.operations);
  }
  

}
