// ==========================================================
//              TIPOS DE DATOS PRIMITIVOS
// ==========================================================

/*
    Sintanxis:
    let identificador: <tipo>
*/

// Tipo string

let mensaje: string;
mensaje = 'Hola Mundo!';

// Tipo number

let resultado: number;
resultado = 9.5;

// Tipo boolean

let mayorEdad: boolean;
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

let frutas: string[];
let autos: Array<string>;

frutas = ['Manzana', 'Sandia', 'Naranja'];

// Tipo any

let id: any = 7546; // Rompe la inferencia de tipos y permitirá cualquiera
id = '46765';

// Tipado de funciones (parámetros y el retorno de la función)

function suma(a: number, b: number): number {
    return a + b;
}
suma(5, 2);

// Tipo void (funciones que no devuelven valores)

function setMensaje(mensaje: string): void {
    console.log(mensaje);
}

// Tipado genérico en funciones (se define el tipo en la invocación de la función)

function retornoResultado<T>(saludo: T): T {
    return saludo;
}
const a: string = retornoResultado<string>('Hola');
const b: string = retornoResultado<number>(20);

// Tipos de unión

type _id = string | number;

let referencia: _id;
referencia = '1A146AB'
referencia = 12.35;

// Tipos de unión complejos

type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';

let razaToby: razasPerro;
razaToby = 'Pastor Alemán';


