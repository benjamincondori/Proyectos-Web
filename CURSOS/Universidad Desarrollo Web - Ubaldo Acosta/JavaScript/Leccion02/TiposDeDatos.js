// TIPOS DE DATOS EN JAVASCRIPT

// Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

nombre = 10;
console.log(typeof nombre);

// Tipo de dato number (numérico)
var numero = 100;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "75124931"
}
console.log(objeto);

// Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

// Tipo clase es una function
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);

// Tipo de dato undefined
var x;
console.log(x);

x = undefined;
console.log(x);

// null = ausencia de valor
var y = null;
console.log(y);

// Tipo de dato object (array)
var autos = ['VMW', 'Audi', 'Suzuki'];
console.log(autos);
console.log(typeof autos);

// empty
var z = '';
console.log(z);
console.log(typeof z);


