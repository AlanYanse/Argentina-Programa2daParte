//======================
//Modulo Tren de Aterrizaje
//======================

export class TrenDeAterrizaje{

  //Atributos

  private estado : string = "";

  //Constructor
  
  public constructor(estado : string){

    this.estado = estado;
  }

  //Métodos

  public getEstado():string{

    return this.estado;
  }
}
