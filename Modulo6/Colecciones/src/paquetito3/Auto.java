package paquetito3;

public class Auto {
	
	// Atributos
	
	private String numPatente;
	private String marca;
	private String modelo;
	private String color;
	private String chasis;
	
	// Constructor
	
	public Auto(String numPatente, String marca, String modelo, String color, String chasis) {
		
		this.numPatente = numPatente;
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.chasis = chasis;
	}
	
	// Getters
	
	public String getPatente() {
		
		return this.numPatente;
		
	}
	
	public String getMarca() {
		
		return this.marca;
	}
	
	public String getModelo() {
		
		return this.modelo;
	}
	
	public String getColor() {
		
		return this.color;
	}
	
	public String getChasis() {
		
		return this.chasis;
	}
	

}










