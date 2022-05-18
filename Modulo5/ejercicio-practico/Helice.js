"use strict";
//==================================
// MÓDULO HÉLICE
//==================================
exports.__esModule = true;
exports.Helice = void 0;
var Helice = /** @class */ (function () {
    //Constructor
    function Helice(n) {
        //Atributos
        this.numHelices = 0;
        this.numHelices = n;
    }
    //Métodos
    Helice.prototype.getCantHelices = function () {
        return this.numHelices;
    };
    return Helice;
}());
exports.Helice = Helice;
