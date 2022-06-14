package paquetito2;
import java.util.*;
import javax.swing.*;


/*
2. Crear una clase persona que tenga los siguientes atributos: dni, nombre, apellido, dirección, celular, edad (tener en cuenta todos sus atributos, constructores y métodos getters y setters). A partir de ello:

a. Crear una LinkedList de tipo Persona y agregar 10 personas distintas.

b. Crear dos LinkedLists de tipo Persona diferentes a la primera, una para almacenar a los menores de edad y otra para los mayores.

c. Recorrer la lista principal buscando a las personas que sean mayores de 18 años. En caso que una persona tenga o sea mayor a 18 años, agregarla a la lista de mayores, caso contrario agregarla a una lista de menores.

d. Una vez realizada la separación, recorrer ambas nuevas listas y mostrar por pantalla el nombre, apellido y edad de cada una de las personas contenidas en cada lista.
 * 
 * 
 */

public class E2_Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Haciendo el escaner
		
		//Scanner sn = new Scanner(System.in);
		
		// NOTA: Iba a usar el escáner pero mejor uso el dialog que es más divertido
		
		// a. Declaración de la LinkedList
		
		List <Persona> listaPersonas = new LinkedList <Persona>();
		
		// b. Declaracion de las otras linkedins
		
		List <Persona> listaMenores = new LinkedList <Persona>();
		List <Persona> listaMayores = new LinkedList <Persona>();
		
		// Agregando 20 personas distintas
		
		for(int i = 0; i<5 ; i++) {
			
			JOptionPane.showMessageDialog(null, "Ingresar los datos de la persona n° " + (i+1));
			
			String dni = JOptionPane.showInputDialog("Ingresar DNI :");
			String nombre = JOptionPane.showInputDialog("Ingresar Nombre :");
			String apellido = JOptionPane.showInputDialog("Ingresar Apellido :");
			String direccion = JOptionPane.showInputDialog("Ingresar Direccion :");
			String celular = JOptionPane.showInputDialog("Ingresar Celular :");
			int edad = Integer.parseInt(JOptionPane.showInputDialog("Ingresar Edad :"));
			
			listaPersonas.add(new Persona(dni , nombre, apellido, direccion, celular, edad));
			
			
		}
		
		for(Persona personita : listaPersonas) {
			
			System.out.println(personita.getNombre());
		}
		
		System.out.println("===============================================");
		System.out.println("Menores");
		System.out.println("===============================================");
		System.out.println("NOMBRE		APELLIDO		EDAD");
		
		for(Persona personita : listaPersonas) {
			
			if(personita.getEdad() < 18) listaMenores.add(personita);
			
									
		}
		
		for(Persona personita : listaMenores) {
			
			System.out.println(personita.getNombre() + " " + personita.getApellido() + " " + personita.getEdad());
			
		}
		
		
		System.out.println("===============================================");
		System.out.println("Mayores");
		System.out.println("===============================================");
		System.out.println("NOMBRE		APELLIDO		EDAD");
		
		for(Persona personita : listaPersonas) {
			
			if(personita.getEdad() >= 18) listaMayores.add(personita);
							
		}
		
		for(Persona personita : listaMayores) {
			
			System.out.println(personita.getNombre() + " " + personita.getApellido() + " " + personita.getEdad());
			
		}
		
		

	}
	
	

}
