package paquetito;

public class Docente extends Persona {
	
	// ATRIBUTOS
	
	private Vehiculo vehiculo;
	
	// CONSTRUCTOR
	
	public Docente(String nombre, String apellido, int DNI, String materia) {
		
		super(nombre, apellido, DNI, materia); // Se hace el llamado al constructor de Persona
		
	}
		
	// METODOS
	
	public void setPoneNota() {
		
		
	}
	
	public void setVehiculo(Vehiculo vehiculo) {
		
		this.vehiculo = vehiculo;
	}
	
	public Vehiculo getVehiculo() {
		
		return this.vehiculo;
	}

}
