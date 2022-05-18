//======================
//Modulo Aeroplano
//======================

import { Cabina } from "./Cabina";
import { Helice } from "./Helice";
import { Turbina } from "./Turbina";
import { TrenDeAterrizaje } from "./TrenDeAterrizaje";

export class Aeroplano{

  //Atributos
  
  private cabina : Cabina;
  private helice : Helice;
  private turbina : Turbina;
  private trenDeAterrizaje : TrenDeAterrizaje;

  //Constructor

  public constructor(cabina : Cabina, helice : Helice, turbina : Turbina, trenDeAterrizaje : TrenDeAterrizaje){
    
    this.cabina = cabina;
    this.helice = helice;
    this.turbina = turbina;
    this.trenDeAterrizaje = trenDeAterrizaje;
  }

  //Metodos

  public getInfoAeroplano():string{

    let encabezado : string = "Soy un Aeroplano sin alas";
    let infoCabina = `Sistema ejector : ${this.cabina.getSistemaEjector()}\n Cantidad de tanques de combustible : ${this.cabina.getNumTanquesCombustible()}\n Cantidad de puertas de salida : ${this.cabina.getNumPuertasDeSalida()} \n Cantidad de hélices : ${this.helice.getCantHelices()} \n Cantidad de turbinas : ${this.turbina.getNumTurbinas()} \n Tren de aterrizaje : ${this.trenDeAterrizaje.getEstado()}`;

    return `${encabezado} \n ${infoCabina}`;
  }
}
