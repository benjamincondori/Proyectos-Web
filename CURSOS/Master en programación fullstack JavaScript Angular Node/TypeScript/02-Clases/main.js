// ==========================================================
//              CLASES EN TYPESCRIPT
// ==========================================================
// Implementar el tipo de miembros y modificadores de acceso
var Jugador = /** @class */ (function () {
    function Jugador(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    Jugador.prototype.getGoles = function () {
        return this.goles;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Lionel', 'Messi');
var jugadores;
// jugadores = [jugador1, {nombre: 'Sergio', apellidos: 'Ramos'}]; Error
jugador1.nombre = 'Leo';
// jugador1.goles = 10; Error
// Sintaxis de constructor breve para clases
var Player = /** @class */ (function () {
    function Player(nombre, apellidos, goles) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.goles = goles;
    }
    Player.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    Player.prototype.getGoles = function () {
        return this.goles;
    };
    return Player;
}());
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, ci) {
        this.nombre = nombre;
        this.ci = ci;
    }
    return Proveedor;
}());
