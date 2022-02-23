// Creación de la superclase
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operacion = /** @class */ (function () {
    function Operacion() {
        this.valor1 = 0;
        this.valor2 = 0;
        this.resultado = 0;
    }
    Object.defineProperty(Operacion.prototype, "Valor1", {
        set: function (value) {
            this.valor1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Valor2", {
        set: function (value) {
            this.valor2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operacion.prototype, "Resultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    return Operacion;
}());
// Creación de la clase Suma que hereda de operación
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suma.prototype.Sumar = function () {
        this.resultado = this.valor1 + this.valor2;
    };
    return Suma;
}(Operacion));
// Creación de la clase Resta que hereda de operación
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Resta.prototype.Restar = function () {
        this.resultado = this.valor1 - this.valor2;
    };
    return Resta;
}(Operacion));
// Creación de los objetos
var operacionSuma = new Suma();
var operacionResta = new Resta();
// Uso de los objetos
operacionSuma.Valor1 = 3;
operacionSuma.Valor2 = 2;
operacionSuma.Sumar();
operacionResta.Valor1 = 10;
operacionResta.Valor2 = 1;
operacionResta.Restar();
console.log("El resultado de la suma es ".concat(operacionSuma.Resultado));
console.log("El resultado de la suma es ".concat(operacionResta.Resultado));
