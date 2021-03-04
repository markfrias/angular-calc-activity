import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'button-section',
  templateUrl: './button-section.component.html',
  styleUrls: ['./button-section.component.css']
})
export class ButtonSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() buttonPressEvent = new EventEmitter<string>();

  buttonPress(buttonValue: string) {
    this.buttonPressEvent.emit(buttonValue);
  }


}
