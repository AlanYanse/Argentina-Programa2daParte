import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router"
// Importamos los componentes a visualizar
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba-component/prueba-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './home-component/home.component';

// Definimos nuestras rutas o vistas

const routes: Routes = [
  
  
  {path: "inicio", component: HomeComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: "prueba", component: PruebaComponent},
  {path: 'prueba', redirectTo: '/prueba', pathMatch: 'full'},
  {path:"**",component: NotFoundComponentComponent, pathMatch: 'full'}
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }
