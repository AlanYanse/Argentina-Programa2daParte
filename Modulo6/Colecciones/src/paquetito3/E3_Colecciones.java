package paquetito3;
import java.util.*;

/*

3. Crear una stack que permita objetos de tipo Autos, donde cada objeto auto debe tener: num_patente, marca, modelo, color, chasis. Cargar la pila con 7 autos diferentes luego hacer lo siguiente:

a. Buscar un auto de color rojo.

b. Mostrar el auto que se encuentra en la cima de la pila.

c. Borrar el auto que se encuentra en la cima de la pila.

d. Agregar dos nuevos autos a la pila.

Recorrer la pila mostrando el nuevo contenido luego de las operaciones realizadas.

*/

public class E3_Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Creación de la pila de autos
		
		Stack <Auto> pilaAutos = new Stack <Auto>();
		
		Auto peugeot206 = new Auto("AD398", "Peugeot", "206", "rojo", "-");
		
		pilaAutos.push(new Auto("AC368", "Ford", "K", "blanco", "-"));
		pilaAutos.push(peugeot206);
		pilaAutos.push(new Auto("AA378", "Chevrolet", "Corsa", "verde", "-"));
		pilaAutos.push(new Auto("AB298", "Renault", "Kangoo", "negro", "-"));
		pilaAutos.push(new Auto("AC394", "Renault", "Oroch", "rojo", "-"));
		pilaAutos.push(new Auto("AC318", "Chevrolet", "Onix", "gris", "-"));
		pilaAutos.push(new Auto("AC198", "Renault", "Clio", "gris", "-"));
		
		// a. Buscar un auto de color rojo.
		
				 
		for(Auto autito : pilaAutos) {
			
			if(autito.getColor() == "rojo") {
				 System.out.println(autito.getMarca() + " " + autito.getModelo());
				 
				 break;
			}
			
		}
		
		// b. Mostrar el auto que se encuentra en la cima de la pila.
		
		System.out.println("El auto de la cima es: " + pilaAutos.peek().getMarca() + " " + pilaAutos.peek().getModelo());
		
		// c. Borrar el auto que se encuentra en la cima de la pila.
		
		pilaAutos.pop();
		
		// d. Agregar dos nuevos autos a la pila.
		
		pilaAutos.push(new Auto("AC319", "Seat", "Ibiza", "azul", "-"));
		pilaAutos.push(new Auto("AA198", "Fiat", "Cronos", "negro", "-"));
		
		// Recorrer la pila mostrando el nuevo contenido luego de las operaciones realizadas.
		
		System.out.println("PILA DE AUTITOS");
		
			for(Auto autito : pilaAutos) {
				
				
				System.out.println(autito.getMarca() + " " + autito.getModelo() + " " + autito.getColor());
			
				
			}
		

	}
	
	

}








