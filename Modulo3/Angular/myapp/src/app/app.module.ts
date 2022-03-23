import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component'; // Lo importó directamente vsc
import { ButtonComponent } from './componentes/button/button.component'; // Lo importó directamente vsc con un pequeño bug


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent // Lo registró automáticamente vsc
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
