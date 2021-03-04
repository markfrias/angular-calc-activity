import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'angular-activity';
  keyValue: string;
  onKey(event: any) {
    this.keyValue = event.key;
  }
  
  
}
