var Persona = /** @class */ (function () {
    // Método constructor
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        // Properties
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this.apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this.edad;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
// Instancia de Persona
var objPersona = new Persona("Chuck", "Martinez", 34);
console.log("El objeto persona ".concat(objPersona.Nombre, " ").concat(objPersona.Apellido, " de ").concat(objPersona.Edad, " a\u00F1os, se fu\u00E9 a Dubai"));
