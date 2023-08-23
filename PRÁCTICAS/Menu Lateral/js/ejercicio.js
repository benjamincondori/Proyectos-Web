
function miFuncion(numero) {
    let cadena = "";
    if (numero != 0) {
        while (numero > 0) {
            let digito = numero % 10;
            numero = Math.trunc(numero / 10);
            for (let i = 0; i < digito; i++) {
                cadena = digito + cadena;
            }
        }
    } else {
        cadena = "El número no puede ser 0."
    }
    return cadena;
}

let numero = 241531;
console.log(miFuncion(numero));
