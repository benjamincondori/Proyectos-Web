class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    toString() {
        return (
            "Id: " +
            this._idPersona +
            ", Nombre: " +
            this._nombre +
            ", Apellido: " +
            this._apellido +
            ", Edad: " +
            this._edad
        );
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return (
            "Id: " +
            this._idEmpleado +
            ", Nombre: " +
            this._nombre +
            ", Apellido: " +
            this._apellido +
            ", Edad: " +
            this._edad +
            ", Sueldo: " +
            this._sueldo
        );
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this.fechaRegistro;
    }

    set fechaRegistro(sueldo) {
        this._fechaRegistro = sueldo;
    }

    toString() {
        return (
            "Id: " +
            this._idCliente +
            ", Nombre: " +
            this._nombre +
            ", Apellido: " +
            this._apellido +
            ", Edad: " +
            this._edad +
            ", Fecha Registro: " +
            this._fechaRegistro
        );
    }
}

let persona1 = new Persona("Juan", "Perez", 25);
let persona2 = new Persona("Laura", "Gomez", 20);
console.log(persona1.toString());
console.log(persona2.toString());

let empleado1 = new Empleado('Jorge', 'Sanchez', 30, 2800);
let empleado2 = new Empleado('Maria', 'Fernandez', 17, 1500);
console.log(empleado1.toString());
console.log(empleado2.toString());

let cliente1 = new Cliente('Marcos', 'Sanchez', 35, new Date());
let cliente2 = new Cliente('Jose', 'Martinez', 27, new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());




