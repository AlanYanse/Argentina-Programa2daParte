"use strict";
//======================
//Modulo Cabina
//======================
exports.__esModule = true;
exports.Cabina = void 0;
var Cabina = /** @class */ (function () {
    //Constructor
    function Cabina(sistemaEjector, numTanquesCombustible, numPuertasDeSalida) {
        //Atributos
        this.sistemaEjector = false;
        this.numTanquesCombustible = 0;
        this.numPuertasDeSalida = 0;
        this.sistemaEjector = sistemaEjector;
        this.numTanquesCombustible = numTanquesCombustible;
        this.numPuertasDeSalida = numPuertasDeSalida;
    }
    //Metodos get
    Cabina.prototype.getSistemaEjector = function () {
        return this.sistemaEjector;
    };
    Cabina.prototype.getNumTanquesCombustible = function () {
        return this.numTanquesCombustible;
    };
    Cabina.prototype.getNumPuertasDeSalida = function () {
        return this.numPuertasDeSalida;
    };
    return Cabina;
}());
exports.Cabina = Cabina;
