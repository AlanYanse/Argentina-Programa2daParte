
class Persona{
  
  // Atributos de clase

  private nombre : string;
  private apellido : string;
  private edad : number;

  // Método constructor

  constructor(nombre : string, apellido : string, edad : number){


    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // Properties

  get Nombre() : string{
    return this.nombre;
  }

  get Apellido() : string{
    return this.apellido;
  }

  get Edad() : number{
    return this.edad;
  }



}


// Instancia de Persona

const objPersona = new Persona("Chuck", "Martinez", 34);

console.log(`El objeto persona ${objPersona.Nombre} ${objPersona.Apellido} de ${objPersona.Edad} años, se fué a Dubai`);
