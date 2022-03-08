
import { Component } from "@angular/core"; // Importa desde el nucleo de angular para poder usar los sombreros (decoradores)

// El sombrero (decorator) propiamente dicho
@Component({

  selector: "prueba-component",                                               // nombre de la etiqueta que va a tener el componente
  templateUrl: "./prueba-component.component.html",                           // el esqueleto del componente
  styleUrls: ["./prueba-component.component.css"]                             // los estilos del componente

})
export class PruebaComponent{              // La clase tiene que ser exportada para poder registrarse y usarse desde afuera del documento


}
