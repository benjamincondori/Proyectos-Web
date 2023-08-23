// ==========================================================
//              TIPOS DE DATOS PRIMITIVOS
// ==========================================================
/*
    Sintanxis:
    let identificador: <tipo>
*/
// Tipo string
var mensaje;
mensaje = 'Hola Mundo!';
// Tipo number
var resultado;
resultado = 9.5;
// Tipo boolean
var mayorEdad;
mayorEdad = false;
// ==========================================================
//              TIPOS DE DATOS COMPUESTOS
// ==========================================================
// Arrays
/*
    Sintaxis:
    let identificador: <tipo-elemento>[]
    let identificador: Array<tipo-elemento>
*/
var frutas;
var autos;
frutas = ['Manzana', 'Sandia', 'Naranja'];
// Tipo any
var id = 7546; // Rompe la inferencia de tipos y permitirá cualquiera
id = '46765';
// Tipado de funciones (parámetros y el retorno de la función)
function suma(a, b) {
    return a + b;
}
suma(5, 2);
// Tipo void (funciones que no devuelven valores)
function setMensaje(mensaje) {
    console.log(mensaje);
}
// Tipado genérico en funciones (se define el tipo en la invocación de la función)
function retornoResultado(saludo) {
    return saludo;
}
var a = retornoResultado('Hola');
var b = retornoResultado(20);
var referencia;
referencia = '1A146AB';
referencia = 12.35;
var razaToby;
razaToby = 'Pastor Alemán';
