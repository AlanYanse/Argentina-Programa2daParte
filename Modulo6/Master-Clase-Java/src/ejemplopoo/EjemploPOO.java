package ejemplopoo;

public class EjemploPOO {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Camion camioncito;
		
		Auto auto1 = new Auto(6532 , 4 ,"Peugeot" , "206", 1 , "AA111J", 5, "Rojo", true );
		Auto auto2 = new Auto();
		
		camioncito = new Camion();
		camioncito.setCantRuedas(4);
		
		
		System.out.println(auto1.toString());
		System.out.println(auto2.toString());
		System.out.println("Auto 1 tiene registro " + auto1.getNumRegistro());
		System.out.println("camioncito tiene " + camioncito.getCantRuedas() + " ruedas");
		
		
		
		
		
		
		
		
		
		
		/*
		 		
		auto1.encender();
		auto1.acelerar(60);
		auto1.frenar(30);
		auto1.apagar();
		
		
		System.out.println("El id del auto2 es : " + auto2.getId());
		
		System.out.println("Vamos a cambiar el id del auto2 mediante el setter");
		
		auto2.setId(2);
		
		System.out.println("Ahora el id del auto2 es : " + auto2.getId());
		*/
		

	}

}
