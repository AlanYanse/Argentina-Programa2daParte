
// Creación de la superclase

class Operacion{

  protected valor1 : number;
  protected valor2 : number;
  protected resultado : number;

  constructor(){
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }

  set Valor1(value : number){
    this.valor1 = value;
  }
  
  set Valor2(value : number){
    this.valor2 = value;
  }

  get Resultado(){

    return this.resultado;
  }

}


// Creación de la clase Suma que hereda de operación

class Suma extends Operacion {

  Sumar(){
    this.resultado = this.valor1 + this.valor2;
  }
}

// Creación de la clase Resta que hereda de operación

class Resta extends Operacion {

  Restar(){
    this.resultado = this.valor1 - this.valor2;
  }
}

// Creación de los objetos


const operacionSuma = new Suma();
const operacionResta = new Resta();


// Uso de los objetos

operacionSuma.Valor1 = 3;
operacionSuma.Valor2 = 2;
operacionSuma.Sumar();

operacionResta.Valor1 = 10;
operacionResta.Valor2 = 1;
operacionResta.Restar();


console.log(`El resultado de la suma es ${operacionSuma.Resultado}`);
console.log(`El resultado de la suma es ${operacionResta.Resultado}`);



















