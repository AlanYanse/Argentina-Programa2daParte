//======================
//Modulo Cabina
//======================

export class Cabina{

  //Atributos

  private sistemaEjector : boolean = false;
  private numTanquesCombustible : number = 0;
  private numPuertasDeSalida : number = 0;

  //Constructor

  public constructor(sistemaEjector : boolean, numTanquesCombustible : number, numPuertasDeSalida : number){

    this.sistemaEjector = sistemaEjector;
    this.numTanquesCombustible = numTanquesCombustible;
    this.numPuertasDeSalida = numPuertasDeSalida;
  }

  //Metodos get


  public getSistemaEjector():boolean{

    return this.sistemaEjector
  }

  public getNumTanquesCombustible():number{

    return this.numTanquesCombustible;
  }

  
  public getNumPuertasDeSalida():number{

    return this.numPuertasDeSalida;
  }

}
