package ejemplopoo;

public class Vehiculo {
	
	private int numRegistro;
	private int cantRuedas;
	private String marca;
	private String modelo;
	
	
	public Vehiculo() {
		
		
	}
	
	
	public Vehiculo(int numRegistro, int cantRuedas, String marca, String modelo) {
		//super();
		this.numRegistro = numRegistro;
		this.cantRuedas = cantRuedas;
		this.marca = marca;
		this.modelo = modelo;
	}
	
	public void estacionar() {
		
		System.out.println("Estoy estacionando");
	}



	
	// Getters y Setters
	
	public int getNumRegistro() {
		return numRegistro;
	}


	public void setNumRegistro(int numRegistro) {
		this.numRegistro = numRegistro;
	}


	public int getCantRuedas() {
		return cantRuedas;
	}


	public void setCantRuedas(int cantRuedas) {
		this.cantRuedas = cantRuedas;
	}


	public String getMarca() {
		return marca;
	}


	public void setMarca(String marca) {
		this.marca = marca;
	}


	public String getModelo() {
		return modelo;
	}


	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	
	
	
	

}
