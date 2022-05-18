"use strict";
//======================
//Modulo Tren de Aterrizaje
//======================
exports.__esModule = true;
exports.TrenDeAterrizaje = void 0;
var TrenDeAterrizaje = /** @class */ (function () {
    //Constructor
    function TrenDeAterrizaje(estado) {
        //Atributos
        this.estado = "";
        this.estado = estado;
    }
    //Métodos
    TrenDeAterrizaje.prototype.getEstado = function () {
        return this.estado;
    };
    return TrenDeAterrizaje;
}());
exports.TrenDeAterrizaje = TrenDeAterrizaje;
