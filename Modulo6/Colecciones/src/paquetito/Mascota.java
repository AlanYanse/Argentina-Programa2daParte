package paquetito;

public class Mascota {
	
	// Atributos
	
	private String nombre;
	private String especie;
	private String sexo;
	private String color;
	private String pelaje;
	private String marca;
	
	// Constructor
	
	public Mascota(String nombre, String especie, String sexo, String color, String pelaje, String marca){
		
		this.nombre = nombre;
		this.especie = especie;
		this.sexo = sexo;
		this.color = color;
		this.pelaje = pelaje;
		this.marca = marca;
	}
	
	// Getters
	
	public String getNombre() {
		
		return this.nombre;
	}
	
	public String getEspecie() {
		
		return this.especie;
	}
	
	public String getSexo() {
		
		return this.sexo;
	}
	
	public String getColor() {
		
		return this.color;
	}
	
	public String getPelaje() {
		
		return this.pelaje;
	}
	
	public String getMarca() {
		
		return this.marca;
	}
	
	// Setters
	
	// Lo más lógico es que solo se pueda modificar el atributo de nombre;
	
	public void setNombre(String nombre) {
		
		this.nombre = nombre;
	}
	
	
	

}
