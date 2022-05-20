package paquetito;

public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Docente unDocente = new Docente("Diego", "Moisset De Espades", 30741654, "Programación");
		
		System.out.println("Apellido : " + unDocente.getApellido() + "\nNombre : " + unDocente.getNombre());

	}

}
