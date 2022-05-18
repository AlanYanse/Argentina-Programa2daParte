"use strict";
//======================
//Modulo Aeroplano
//======================
exports.__esModule = true;
exports.Aeroplano = void 0;
var Aeroplano = /** @class */ (function () {
    //Constructor
    function Aeroplano(cabina, helice, turbina, trenDeAterrizaje) {
        this.cabina = cabina;
        this.helice = helice;
        this.turbina = turbina;
        this.trenDeAterrizaje = trenDeAterrizaje;
    }
    //Metodos
    Aeroplano.prototype.getInfoAeroplano = function () {
        var encabezado = "Soy un Aeroplano sin alas";
        var infoCabina = "Sistema ejector : ".concat(this.cabina.getSistemaEjector(), "\n Cantidad de tanques de combustible : ").concat(this.cabina.getNumTanquesCombustible(), "\n Cantidad de puertas de salida : ").concat(this.cabina.getNumPuertasDeSalida(), " \n Cantidad de h\u00E9lices : ").concat(this.helice.getCantHelices(), " \n Cantidad de turbinas : ").concat(this.turbina.getNumTurbinas(), " \n Tren de aterrizaje : ").concat(this.trenDeAterrizaje.getEstado());
        return "".concat(encabezado, " \n ").concat(infoCabina);
    };
    return Aeroplano;
}());
exports.Aeroplano = Aeroplano;
