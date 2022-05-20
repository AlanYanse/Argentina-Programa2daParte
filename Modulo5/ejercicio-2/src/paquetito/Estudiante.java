package paquetito;

public class Estudiante extends Persona {
	
	// ATRIBUTOS
	
	private double nota;
	
	// CONSTRUCTOR
	
	public Estudiante(String nombre, String apellido, int DNI, String materia) {
		
		super(nombre, apellido, DNI, materia); // Llamado al constructor de Persona
	}
		
	// METODOS
	
	public void setRecibeNota(double nota) {
		
		this.nota = nota;
	}

}
