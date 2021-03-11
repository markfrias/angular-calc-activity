import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'calc-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  @Input() result: number;
  @Input() operations: string;
  @Input() max:boolean;

  

  constructor() {
  
   }

  ngOnInit(): void {
    
  }

  
  

  

}
