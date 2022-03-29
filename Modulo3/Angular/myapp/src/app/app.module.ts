import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component'; // Lo importó directamente vsc
import { ButtonComponent } from './componentes/button/button.component'; // Lo importó directamente vsc con un pequeño bug
import { TasksComponent } from './componentes/tasks/tasks.component'; // Lo importó directamente vsc
import { TasksItemComponent } from './componentes/tasks-item/tasks-item.component'; //Lo importó directamente vsc
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Lo importó directamente vsc
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Lo registró automáticamente vsc
    ButtonComponent, // Lo registró automáticamente vsc
    TasksComponent,  // Lo registró automáticamente vsc
    TasksItemComponent // Lo registró automáticamente vsc
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule, // Lo registró automáticamente vsc
    HttpClientModule
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
