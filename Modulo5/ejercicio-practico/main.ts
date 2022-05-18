//==========================================================================
//Modulo principal para instanciar un Aeroplano
//==========================================================================

import { Aeroplano } from "./Aeroplano";
import { Cabina } from "./Cabina";
import { Helice } from "./Helice";
import { Turbina } from "./Turbina";
import { TrenDeAterrizaje } from "./TrenDeAterrizaje";


//Atributos
  
let h : Helice = new Helice(4);
let c : Cabina = new Cabina(true, 5, 2);
let t : Turbina = new Turbina(2);
let tren : TrenDeAterrizaje = new TrenDeAterrizaje("no se que demonios es eso");
let miAeroplano : Aeroplano = new Aeroplano(c,h,t,tren);




console.log(miAeroplano.getInfoAeroplano());







