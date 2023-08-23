let x = 3,
    y = 2;
let z = x + y;
console.log("Resultado de la suma: " + z);

z = x - y;
console.log("Resultado de la resta: " + z);

z = x * y;
console.log("Resultado de la multiplicación: " + z);

z = x / y;
console.log("Resultado de la división: " + z);

z = x % y;
console.log("Resultado de la operación modulo (residuo): " + z);

z = x ** y;
console.log("Resultado de la operación exponente: " + z);

let a = 3,
    b = 2;
let c = a + b;

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
c = ++a;
console.log(a);
console.log(c);

// Post-incremento (el operador ++ despué de la variable)
c = b++;
console.log(b);
console.log(c);

// Decremento
// Pre-decremento
c = --a;
console.log(a);
console.log(c);

// Post-decremento
c = b--;
console.log(b);
console.log(c);

// Precedencia de operadores
(a = 3), (b = 2), (c = 1);
let d = 4;

let resultado = a * b + c / d;
console.log(resultado);

resultado = c + (a * b) / d;
console.log(resultado);

resultado = ((c + a) * b) / c;
console.log(resultado);

// =====================================================================
// OPERADORES DE ASIGNACIÓN
// =====================================================================

a = 1;
a += 3; // a = a + 3;
console.log(a);

a -= 2; // a = a - 2;
console.log(a);

a *= 2; // a = a * 2;
console.log(a);

a /= 2; // a = a / 2;
console.log(a);

a **= 2; // a = a ** 2;
console.log(a);

a %= 3; // a = a % 2;
console.log(a);

// =====================================================================
// OPERADORES DE COMPARACIÓN;
// =====================================================================

(a = 3), (b = 2), (c = "3");

z = a == c; // Se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // Se revisa los valores pero también los tipos
console.log(z);

z = a != c; // Se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; // Se revisa los valores pero también los tipos
console.log(z);

// =====================================================================
// OPERADORES RELACIONALES
// =====================================================================

(a = 3), (b = 3), (c = "3");

z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

// =====================================================================
// EJERCICIOS
// =====================================================================

let numero = 7;
if (numero % 2 == 0) {
    console.log("Es número par.");
} else {
    console.log("Es un número impar.");
}

let edad = 15,
    adulto = 18;
if (edad >= adulto) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad.");
}

// =====================================================================
// OPERADORES LÓGICOS
// =====================================================================

let num = 15;
let valorMin = 0,
    valorMax = 10;
if (num >= valorMin && num <= valorMax) {
    console.log("Dentro de rango.");
} else {
    console.log("Fuera de rango.");
}

let vacaciones = false,
    diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado.");
}

// =====================================================================
// OPERADOR TERNARIO
// =====================================================================

let result = 1 > 2 ? "Verdadero" : "False";
console.log(result);

numero = 2;
result = numero % 2 == 0 ? "Es número par." : "Es número impar.";
console.log(result);

// =====================================================================
// CONVERTIR STRING A NUMBER
// =====================================================================

let miNumero = "18x";
edad = Number(miNumero);

if (isNaN(edad)) {
    console.log("No es un número");
} else {
    if (edad >= 18) {
        console.log("Puede votar.");
    } else {
        console.log("Muy joven para votar.");
    }
}

result = isNaN(edad)? "No es un número": (edad >= 18)? "Puede votar": "Muy joven para votar";
console.log(result);





