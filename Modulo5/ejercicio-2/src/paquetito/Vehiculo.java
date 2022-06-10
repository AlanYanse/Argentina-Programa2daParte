package paquetito;

public class Vehiculo {
	
	// Atributos
	
	private int cantRuedas;
	
	// Constructor
	
	public Vehiculo(int cantRuedas){
		
		this.cantRuedas = cantRuedas;
	}
	
		
	// Métodos
	
	public int getCantidadRuedas() {
		
		return this.cantRuedas;
	}
	
	public void setCantidadRuedas(int cantRuedas) {
		
		this.cantRuedas = cantRuedas;
	}
	
	public String frenar() {
		
		return "Estoy frenando";
	}

}
