//======================
//Modulo Turbina
//======================

export class Turbina{

  //Atributos

  private numTurbinas : number = 0;

  //Constructor

  public constructor(numTurbinas : number){

    this.numTurbinas = numTurbinas;
  }

  //Métodos

  public getNumTurbinas():number{

    return this.numTurbinas;
  }
}
