package ejemplopoo;

public class Camion extends Vehiculo {
	
	private int cantEjes;
	private boolean acoplado;
	
	public Camion() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Camion(int numRegistro, int cantRuedas, String marca, String modelo, int cantEjes, boolean acoplado) {
		super(numRegistro, cantRuedas, marca, modelo);
		// TODO Auto-generated constructor stub
		this.cantEjes = cantEjes;
		this.acoplado = acoplado;
		
		
	}

	public int getCantEjes() {
		return cantEjes;
	}

	public void setCantEjes(int cantEjes) {
		this.cantEjes = cantEjes;
	}

	public boolean isAcoplado() {
		return acoplado;
	}

	public void setAcoplado(boolean acoplado) {
		this.acoplado = acoplado;
	}
	
	
	
	

}
