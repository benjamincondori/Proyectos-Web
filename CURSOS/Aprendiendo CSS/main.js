alert('Hola Mundo!!');

var nombre = "Benjamin";
var altura = 170;

var concatenacion = nombre + " " + altura;

/*document.write(nombre);
document.write(altura);
document.write(concatenacion);*/

var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if (altura >= 190) {
    datos.innerHTML += '<h1> Eres una persona ALTA</h1>';
} else {
    datos.innerHTML += '<h1> Eres una persona BAJITA</h1>';
}

for (var i = 2000; i <= 2020; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h2> Estamos en el año: " + i;
}

//Es una función

/*function MuestraMiNombre(nombre, altura) {
    var datos = document.getElementById("datos");
    datos.innerHTML = concatenacion;
    datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;
}

MuestraMiNombre("Benjamin Condori Vasquez", 170);
*/

function MuestraMiNombre(nombre, altura) {
    var misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
}

function Imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Benjamin Condori Vasquez", 170);
}

Imprimir();

var nombres = ['Benjamin', 'Sebastian', 'Santiago'];
alert(nombres[0]);

document.write('<h1>Listado de nombres:</h1>');

for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br/>');
}

nombres.forEach(function(nombre) {
    document.write(nombre + '<br/>');
});

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});