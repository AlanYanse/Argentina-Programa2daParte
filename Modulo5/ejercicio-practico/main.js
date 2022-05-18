"use strict";
//==========================================================================
//Modulo principal para instanciar un Aeroplano
//==========================================================================
exports.__esModule = true;
var Aeroplano_1 = require("./Aeroplano");
var Cabina_1 = require("./Cabina");
var Helice_1 = require("./Helice");
var Turbina_1 = require("./Turbina");
var TrenDeAterrizaje_1 = require("./TrenDeAterrizaje");
//Atributos
var h = new Helice_1.Helice(4);
var c = new Cabina_1.Cabina(true, 5, 2);
var t = new Turbina_1.Turbina(2);
var tren = new TrenDeAterrizaje_1.TrenDeAterrizaje("no se que demonios es eso");
var miAeroplano = new Aeroplano_1.Aeroplano(c, h, t, tren);
console.log(miAeroplano.getInfoAeroplano());
