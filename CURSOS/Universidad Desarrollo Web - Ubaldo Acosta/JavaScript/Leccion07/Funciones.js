// ===============================================
// FUNCIONES
// ===============================================

// Declaración de la función
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b; 
}

// Llamando a la función
let resultado = miFuncion(3, 2);
console.log(resultado);


// FUNCIONES DE TIPO EXPRESIÓN
let sumar = function (a, b) {
    return a + b;
}
resultado = sumar(1, 2);
console.log(resultado);


// FUNCIONES DE TIPO SELF-INVOKING (se llama a sí misma, no es reutilizable)
(function(a, b) {
    console.log("Ejecutando la función: " + (a + b));
})(3, 4);


let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


// FUNCIONES FLECHAS (ARROW)
const sumarFuncion = (a, b) => {
    a + b;
}
resultado = sumarFuncion(7, 2);
console.log(resultado);


// Sumar todos los argumentos de una función
let result = sumarTodo(5, 4, 13, 10, 9);
console.log(result);

function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}



// Paso por valor
let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);
console.log(x);

// Paso por referencia
const persona = {
    nombre : "Juan",
    apellido : "Perez"
}

function cambiarValorObjeto(p1, nombre, apellido) {
    p1.nombre = nombre;
    p1.apellido = apellido;
}

cambiarValorObjeto(persona, "Carlos", "Lara");
console.log(persona);



// FUNCIONES CALLBACK
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumarNumeros(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumarNumeros(5, 3, imprimir);

// Llamadas asíncronas con uso setTimeout
function miFuncionCallback() {
    console.log('Saludo asícrono después de 3 segundos')
}

setTimeout(miFuncionCallback, 3000); // después de 3 segundos

setTimeout(function() {
    console.log('saludo asíncrono 2');
}, 4000);

setTimeout(() => console.log('saludo asíncrono 3'), 1000);


// Llamadas con uso setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
setInterval(reloj, 1000);



