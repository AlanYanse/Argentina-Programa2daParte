package ejemplopoo;

public class EjemploPOO {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Camion camioncito;
		Moto motito;
		Vehiculo vehiculo = new Vehiculo(52445, 4, "Renault", "indefinido");
		
		camioncito = new Camion();
		camioncito.setCantRuedas(4);
		
		motito = new Moto(1453, 2 , "Yamaha", "ZR200", 125);
		
		Auto auto1 = new Auto(6532 , 4 ,"Peugeot" , "206", 1 , "AA111J", 5, "Rojo", true );
		Auto auto2 = new Auto();
		
		Vehiculo arrayVehiculos[] = new Vehiculo[4];
		
		arrayVehiculos[0] = vehiculo;
		arrayVehiculos[1] = camioncito;
		arrayVehiculos[2] = motito;
		arrayVehiculos[3] = auto1;
		
		for(Vehiculo v : arrayVehiculos) {
			
			System.out.println(v.getMarca() + " " + v.getModelo());
		}
		
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
