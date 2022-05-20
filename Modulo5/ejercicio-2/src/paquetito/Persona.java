package paquetito;

public class Persona {
	
	// ATRIBUTOS
	
	private Vehiculo vehiculo;
	private String nombre;
	private String apellido;
	private final int DNI;
	private String materia;
	
	// CONSTRUCTOR
	
	public Persona(String nombre, String apellido, final int DNI, String materia) {
		
		this.nombre = nombre;
		this.apellido = apellido;
		this.DNI = DNI;
		this.materia = materia;
	}
		
	// METODOS
	
	// getters
	
	public String getNombre() {
		
		return this.nombre;
	}
	
	public String getApellido() {
		
		return this.apellido;
	}
	
	public int getDNI() {
		
		return this.DNI;
	}
	
	public String getMateria() {
		
		return this.materia;
	}
	
	// setters
	
	public void setNombre(String nombre) {
		
		this.nombre = nombre;
		
	}
	
	public void setApellido(String apellido) {
		
		this.nombre = apellido;
		
	}
	
	public void setMateria(String materia) {
		
		this.nombre = materia;
		
	}

}
