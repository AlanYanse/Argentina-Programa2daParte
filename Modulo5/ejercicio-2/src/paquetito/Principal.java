package paquetito;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Docente unDocente = new Docente("Diego", "Moisset De Espades", 30741654, "Programación");
		
		System.out.println("Apellido : " + unDocente.getApellido() + "\nNombre : " + unDocente.getNombre());
		
		Auto autito = new Auto(4);
		autito.setPatente("AJX532");
		
		unDocente.setVehiculo(autito);
		
		System.out.println("Tiene un un vehículo de " + autito.getCantidadRuedas() + " ruedas y patente: " + autito.getPatente());
		
		
		

	}

}
