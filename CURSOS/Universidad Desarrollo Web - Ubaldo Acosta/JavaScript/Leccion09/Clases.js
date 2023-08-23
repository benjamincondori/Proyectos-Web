// =================================================================
// CLASES
// =================================================================

class Persona {

    static contadorPersonas = 0; // atributo de nuestra clase
    email = "valor default email"; // atributo de nuestros objetos

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido) {
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this._nombre = nombre;
            this._apellido = apellido;
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log('Se ha superado el máximo de objetos permitidos');
        }
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
    nombreCompleto() {
        return this.idPersona + '. ' + this._nombre + ' ' + this._apellido;
    }
    // sobreescribiendo el metodo de la clase padre Object
    toString() {
        // se aplica polimorfismo (multiples formas en tiempo de ejecución)
        // el método que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.nombreCompleto();
    }
    static saludar() {
        console.log("Saludos desde método static")
    }
    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

// Herencia
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // llama al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    // sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos'; // set nombre('Juan Carlos')
console.log(persona1.nombre); // get nombre
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2);
console.log(persona2.nombre);
console.log(persona2.nombreCompleto());
console.log(persona2.toString());


let empleado1 = new Empleado('Laura', 'Gomez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar(); no es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


console.log(Persona.contadorPersonas);









