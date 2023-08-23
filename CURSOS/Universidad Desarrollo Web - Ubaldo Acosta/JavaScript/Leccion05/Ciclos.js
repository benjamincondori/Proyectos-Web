// ===============================================
// CICLO WHILE
// ===============================================

let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");


// ===============================================
// CICLO DO WHILE
// ===============================================

contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 3);
console.log("Fin ciclo do while");


// ===============================================
// CICLO FOR
// ===============================================

for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log("Fin ciclo for");


// ===============================================
// USO DE LA PALABRA BREAK
// ===============================================

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
        break;
    }
}
console.log("Fin ciclo for");


// ===============================================
// USO DE LA PALABRA CONTINUE
// ===============================================

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // ir a la siguiente iteración
    } else {
        console.log(i);
    }
}
console.log("Fin ciclo for");

// ===============================================
// USO DE LABEL
// ===============================================

inicio:
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue inicio; // ir a la siguiente iteración
    } else {
        console.log(i);
    }
}
console.log("Fin ciclo for");





