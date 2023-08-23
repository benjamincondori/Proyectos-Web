// =============================================================
// OBJETOS
// =============================================================

// Funcion constructor de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Maria", "Rodriguez", "mrodriguez@mail.com");
console.log(padre);

let persona = {
    nombre : "Juan",
    apellido : "Perez",
    email : "jperez@mail.com",
    edad : 28,
    idioma : "es",
    get languaje() {
        return this.idioma.toUpperCase();
    },
    set languaje(languaje) {
        return this.idioma = languaje.toUpperCase();
    },
    nombreCompleto1 : function() {
        return this.nombre + " " + this.apellido;
    },
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}

// Añadir propiedades 
persona.telefono = "77841253";
persona.direccion = "Monterrey";

console.log(persona.nombre);
console.log(persona.nombreCompleto1());
console.log(persona.nombreCompleto);
console.log(persona);

// Eliminar un propiedad
delete persona.direccion;

console.log(persona);

persona.languaje = "en";

console.log(persona.languaje);
console.log(persona.idioma);


// CREACION DE OBJETOS

let persona3 = new Object();
persona3.nombre = "Carlos";
persona3.direccion = "San Francisco";
persona3.telefono = "74578123";

console.log(persona3);
console.log(persona3["nombre"]);

// for in
for (nombrePropiedad in persona3) {
    console.log(nombrePropiedad);
    console.log(persona3[nombrePropiedad]);
}



// IMPRIMIR OBJETOS
console.log(persona.nombre + ", " + persona.apellido); // concatenando

for (propiedad in persona) { // usando for in
    console.log(persona[propiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);


// FORMAS DE CREAR OBJETOS
let miObjeto = new Object();
let miObjeto2 = {};

let miString = new String('Hola');
let miString2 = 'Hola';

let miNumero = new Number(5);
let miNumero2 = 5;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

// USO DE PROTOTYPE
Persona.prototype.telefono = "77451236";  // agrega una propiedad al constructor
console.log(padre.telefono);
padre.telefono = "74156279";
console.log(padre.telefono);


// USO DE CALL
let persona1 = {
    nombre : "Laura",
    apellido : "Gomez",
    nombreCompleto : function() {
        return this.nombre + ' ' + this.apellido;
    },
    nombreCompleto2 : function(titulo, telefono) {
        return titulo + ". " + this.nombre + ' ' + this.apellido + ", " + telefono;
    }
}

let persona2 = {
    nombre : "Marcos",
    apellido : "Sanchez"
}

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.nombreCompleto.apply(persona2));

console.log(persona1.nombreCompleto2("Lic", "66471234"));
console.log(persona1.nombreCompleto2.call(persona2, "Ing", "74125472"));
let arreglo = ['Ing', '74125472'];
console.log(persona1.nombreCompleto2.apply(persona2, arreglo));






