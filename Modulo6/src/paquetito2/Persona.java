package paquetito2;

public class Persona {
	
	// Atributos
	
	private String dni;
	private String nombre;
	private String apellido;
	private String direccion;
	private String celular;
	private int edad;
	
	// Constructor
	
	public Persona(String dni, String nombre, String apellido, String direccion, String celular, int edad) {
		
		this.dni = dni;
		this.nombre = nombre;
		this.apellido = apellido;
		this.direccion = direccion;
		this.celular = celular;
		this.edad = edad;
		
		
	}
	
	// Getters
	
	public String getDNI() {
		
		return this.dni;
	}
	
	public String getNombre() {
		
		return this.nombre;
	}
	
	public String getApellido() {
		
		return this.apellido;
	}
	
	public String getDireccion() {
		
		return this.direccion;
	}
	
	public String getCelular() {
		
		return this.celular;
	}
	
	public int getEdad() {
		
		return this.edad;
	}
	
	// Setters
	
	public void setDireccion(String direccion) {
		
		this.direccion = direccion;
		
	}
	
	public void setCelular(String celular) {
		
		this.direccion = celular;
		
	}
	
	public void setEdad(int edad) {
		
		this.edad = edad;
		
	}

}
