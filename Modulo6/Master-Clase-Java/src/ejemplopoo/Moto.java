package ejemplopoo;

public class Moto extends Vehiculo {
	
	private int cilindrada;

	public Moto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Moto(int numRegistro, int cantRuedas, String marca, String modelo, int cilindrada) {
		super(numRegistro, cantRuedas, marca, modelo);
		// TODO Auto-generated constructor stub
		this.cilindrada = cilindrada;
	}

	public int getCilindrada() {
		return cilindrada;
	}

	public void setCilindrada(int cilindrada) {
		this.cilindrada = cilindrada;
	}
	
	
	
	

}
