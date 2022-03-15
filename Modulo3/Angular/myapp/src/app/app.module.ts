import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from "./prueba-component/prueba-component.component"
import { CatService } from './shared/cat.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home-component/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NotFoundComponentComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [
    CatService,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
