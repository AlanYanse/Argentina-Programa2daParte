"use strict";
//======================
//Modulo Turbina
//======================
exports.__esModule = true;
exports.Turbina = void 0;
var Turbina = /** @class */ (function () {
    //Constructor
    function Turbina(numTurbinas) {
        //Atributos
        this.numTurbinas = 0;
        this.numTurbinas = numTurbinas;
    }
    //Métodos
    Turbina.prototype.getNumTurbinas = function () {
        return this.numTurbinas;
    };
    return Turbina;
}());
exports.Turbina = Turbina;
