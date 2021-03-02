import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcFrameComponent } from './calc-frame/calc-frame.component';
import { DisplayComponent } from './display/display.component';
import { ButtonSectionComponent } from './button-section/button-section.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcFrameComponent,
    DisplayComponent,
    ButtonSectionComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
