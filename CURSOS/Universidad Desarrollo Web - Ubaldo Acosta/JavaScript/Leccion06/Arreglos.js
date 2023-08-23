// ===============================================
// ARREGLOS
// ===============================================

//let autos = new Array("Suzuki", "Toyota", "Mercedes");

const autos = ["Suzuki", "Toyota", "Mercedes"];
console.log(autos);
console.log(autos[0]);


// Recorrer un array
for (let i = 0; i < autos.length; i++) {
    const element = " autos[" +i + "]: " + autos[i];
    console.log(element);
}

// Modificar el valor de un elemento del array
autos[1] = "Audi";
console.log(autos[1]);

// Formas de agregar elementos en un array
autos.push("Lamborghini");
console.log(autos);

console.log(autos.length)
autos[autos.length] = "Ferrari";
console.log(autos);

// Preguntar si es un Array
console.log(typeof autos); // No funciona para preguntar si es Array
console.log(Array.isArray(autos));
console.log(autos instanceof Array);

