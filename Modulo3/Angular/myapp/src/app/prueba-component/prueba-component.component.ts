
import { Component } from "@angular/core"; // Importa desde el nucleo de angular para poder usar los sombreros (decoradores)

// El sombrero (decorator) propiamente dicho
@Component({

  selector: "prueba-component",                                               // nombre de la etiqueta que va a tener el componente
  templateUrl: "./prueba-component.component.html",                           // el esqueleto del componente
  styleUrls: ["./prueba-component.component.css"]                             // los estilos del componente

})
export class PruebaComponent{              // La clase tiene que ser exportada para poder registrarse y usarse desde afuera del documento

    fruta: string = 'manzana';
    verdura: string = 'lechuga';
    pi: number = 3.14159265359;
    ciudad = {
      nombre: 'Bahía Blanca',
      poblacion: 284776
    };
    helloWorld = () => {
      return "Hola mundo!"
    }

    armaduras = [
      'Mark I',
      'Mark II',
      'Mark III',
      'Mark IV',
      'Mark V',
      'Mark VI',
      'Mark XLII'
    ];
    
    ironman : string = 'Tony Stark';
    revelar_identidad : boolean = false; // cambiar por true
    usar = this.armaduras[2];
    superhero : string = 'Ironman';

   revelarIdentidad(){                 // método que se llama desde el template a través de la propiedad (click) del button
    this.revelar_identidad = true;
   }

   nombre: string = '';
   telefono = '';
   dni = '';
 
   cambiaDni(valor: string) {
     // Podes consultar el valor por consola
     console.log(valor);
     this.dni = valor;
   }
 
   onClick() {
     alert('Hiciste click!!');
   }
}
