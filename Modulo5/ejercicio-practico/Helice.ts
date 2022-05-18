
//==================================
// MÓDULO HÉLICE
//==================================

export class Helice{

  //Atributos

  private numHelices : number = 0;

  //Constructor

  public constructor(n : number){

    this.numHelices = n;
  }

  //Métodos

  public getCantHelices():number{

    return this.numHelices;
  }
}
