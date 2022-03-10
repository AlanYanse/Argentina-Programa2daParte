import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from "./prueba-component/prueba-component.component"
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
