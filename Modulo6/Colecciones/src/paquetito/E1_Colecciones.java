package paquetito;

import java.util.ArrayList;

/*
 * 1. Crear una clase Mascota, que tenga los siguientes atributos: nombre, especie, sexo, color, pelaje y raza (tener en cuenta todos sus atributos, constructores y métodos getters y setters). A partir de ello:

   a. Crear un ArrayList de tipo Mascota. Crear 5 mascotas y guardarlas en la lista.

   b. Recorrer la lista creada y mostrar por pantalla el nombre, especie y pelaje de las mascotas almacenadas.

   c. Durante el recorrido, cambiar el nombre de dos mascotas. Volver a recorrer la lista y mostrar los nuevos datos

   d. Agregar dos nuevas mascotas a la lista.

   e. Recorrer la lista pero solo mostrando las mascotas que sean de la especie “perro”.
 */

public class E1_Colecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Objetos Mascotas
		
		Mascota aki = new Mascota("Akira", "Perro", "Hembra", "Dorado", "Lazio", "Canino" );
		Mascota visarania = new Mascota("Visaraña", "Araña Errante", "Hembra", "Marrón", "Áspero", "Arácnido" );
		Mascota amarillo = new Mascota("Amarillo", "Gato", "Macho", "Amarillo", "Lazio", "Felino" );
		Mascota musso = new Mascota("Musso", "Pez", "Macho", "Dorado", "Escamoso", "Pez Pescado" );
		Mascota tatuga = new Mascota("Tatuga", "Tortuga", "Hembra", "Verde", "Escamoso", "Reptil" );
		
		// a
		
		ArrayList<Mascota> arrayMascotas = new ArrayList<Mascota>(); // Creación del ArrayList
		
		// Agregando elementos
		
		arrayMascotas.add(aki);
		arrayMascotas.add(visarania);
		arrayMascotas.add(amarillo);
		arrayMascotas.add(musso);
		arrayMascotas.add(tatuga);
		
		// b
		
		// Imprimiendo sus elementos
		
		for(Mascota mascota : arrayMascotas) {
			
			System.out.println("Nombre de la mascota: \n" + mascota.getNombre() + "\nde la especie:  \n" + mascota.getEspecie() + "\nsu pelaje es: \n" + mascota.getPelaje());
			System.out.println("=================================");
		}
		
		// c
		
		// Cambiando nombres a 2 mascotas
		
		System.out.println("=================================");
		System.out.println("Datos actualizados");
		System.out.println("=================================");
			
		for(Mascota mascota : arrayMascotas) {
				
				if(mascota.getNombre() == "Musso") mascota.setNombre("Mussolini");
				if(mascota.getNombre() == "Tatuga") mascota.setNombre("Manuelita");
			
			System.out.println("Nombre de la mascota: \n" + mascota.getNombre() + "\nde la especie:  \n" + mascota.getEspecie() + "\nsu pelaje es: \n" + mascota.getPelaje());
			System.out.println("=================================");
		}
		
		// d
		
		// Agregando 2 nuevas mascotas
		
		Mascota esculapio = new Mascota("Esculapio", "Gallo", "Macho", "Blanco y Dorado", "Suave plumoso", "Ave");
		Mascota gaizka = new Mascota("Gaizka", "Perro", "Macho", "Gris", "Pinchudo", "Canino");
		
		arrayMascotas.add(esculapio);
		arrayMascotas.add(gaizka);
		
		// e
		
		// Mostrando solo los perros
		
		
		System.out.println("=================================");
		System.out.println("Estos son los Perros");
		System.out.println("=================================");
		
		
		
		for(Mascota mascota : arrayMascotas) {
			
			if(mascota.getEspecie() == "Perro") {
				
				System.out.println("Nombre de la mascota: \n" + mascota.getNombre() + "\nde la especie:  \n" + mascota.getEspecie() + "\nsu pelaje es: \n" + mascota.getPelaje());
				System.out.println("=================================");
				
				
			}
		
		
	}
		
		
		
		

	}

}
