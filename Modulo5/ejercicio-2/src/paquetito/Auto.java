package paquetito;

public class Auto extends Vehiculo {
	
	// Atributos
	
	private String patente;
	
	// Constructor
	
	public Auto(int cantRuedas) {
		
		super(cantRuedas);
		
		
	}
			
	// M�todos
	
	public String getPatente() {
		
		return patente;
	}
	
	public void setPatente(String patente) {
		
		this.patente = patente;
	}
}
