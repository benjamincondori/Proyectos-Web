// =========================================================================
//          METÓDOS Y PROPIEDADES PARA STRING EN JAVASCRIPT
// =========================================================================


// let nombre = new String('Juan');
let nombre = 'Juan';

console.log(nombre.length); // Devuelve el n° de caracteres
console.log(nombre.toLowerCase()); // Devuelve el valor transformado a minusculas
console.log(nombre.toUpperCase()); // Devuelve el valor transformado a mayusculas
console.log(nombre.charAt(2)); // Devuelve el caracter de la posición (indexada a cero)
console.log(nombre.indexOf('n')); // Devuelve la posición de la primera coincidencia 
console.log(nombre.indexOf('x')); // Devuelve -1 si no encuentra el caracter   

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // Devuelve la posición de la última coincidencia
console.log(nombre.includes('nda')); // Devuelve tru o false si encuentra la cadena
console.log(nombre.startsWith('A')); // Devuelve true o false si comienza por el caracter
console.log(nombre.endsWith('z')); // Devuelve true o false si finaliza por el caracter

let apellidos = 'Pérez Gómez';
let nombreCompleto = nombre.concat(' ' + apellidos);
console.log(nombreCompleto);

let frase = '      En un lugar de la Mancha        ';
console.log(frase.trim()); // Elimina los espacios al cominzo y al final

let password = '01234abcde';
console.log(password.slice(2, 5)); // Devuelve el fragmento desde la primera posición incluida hasta la segunda posició excluida
console.log(password.slice(-2)); // Pasando argumento negativo devuelve los n últimos caracteres


// Templates literals

nombre = 'Laura';
apellidos = 'Pérez Gómez';
let resultado = 9.6;

let mensaje = `La juagadora ${nombre} ${apellidos} tiene un resultado de ${resultado}`;
console.log(mensaje);


// =========================================================================
//          METÓDOS Y PROPIEDADES PARA TIPOS NUMBER
// =========================================================================

// Clase Math
// Redondeo

let puntuacion = 2.5;

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;
puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo a la baja

puntuacion = 9.7;

puntuacionRedondeada = Math.floor(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo a alza

puntuacion = 9.7;

puntuacionRedondeada = Math.ceil(puntuacion);
console.log(puntuacionRedondeada);

// Random devolver un número aleatorio entre 0 y 0.999999999

let nombres = ['Juan', 'Sara', 'Carlos', 'Raquel'];
let nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];

console.log(Math.random());
console.log(Math.random() * nombres.length);
console.log(Math.floor(Math.random() * nombres.length));
console.log(nombreElegido);

// Parseo de string a number

let numero = '9.7'; // tipo string
let numeroParseado = parseFloat(numero); // Convierte a number y mantiene la parte flotante
console.log(numeroParseado);
let numeroEnteroParseado = parseInt(numero); // Convierte a number y mantiene solo la parte entera
console.log(numeroEnteroParseado);

// Parseo de number a string

let numero2 = 56.7;
let numero2ParseadoString = numero2.toString();
console.log(numero2ParseadoString);
console.log(typeof numero2ParseadoString);



// =========================================================================
//          METÓDOS Y PROPIEDADES PARA FECHAS
// =========================================================================

// Date
// Obtener la fecha actual

let fechaActual = new Date();
console.log(fechaActual);

// Establecer fechas en javascript
// 1ra opción pasando argumentos: año, mes (indexado a cero), dia, hora, minutos, segundos, ms 

let fechaNacimiento = new Date(2002, 5, 5);  // 5 de junio 2002
console.log(fechaNacimiento);

// 2da opción pasando argumentos fecha-string 'yyyy-MM-dd' (meses no indexados a cero)

let fechaExpedicion = new Date('2021-3-15');  // 15 de marzo 2021
console.log(fechaExpedicion);

// 3ra opcion pasando argumento en milisegundos desde era Epoch

let fechaAleatoria = new Date(2021713114581);
console.log(fechaAleatoria);

// Metodos de instacias date

console.log(fechaActual.getFullYear()); //Devuelve el año en tipo number
console.log(fechaActual.getMonth()); //Devuelve el mes en tipo number (indexado a cero)

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

console.log(meses[fechaActual.getMonth()]);

console.log(fechaActual.getDate()); // Devuelve el dia del mes
console.log(fechaActual.getDay()); // Devuelve el dia de la semana
console.log(fechaActual.getHours()); // Devuelve la hora
console.log(fechaActual.getMinutes()); // Devuelve los minutos
console.log(fechaActual.getSeconds()); // Devuelve los segundos
console.log(fechaActual.getMilliseconds()); // Devuelve los milisegundos

// Para el calculo de fechas utilizamos los milisegundos

console.log(fechaActual.getTime()); // MIlisegundos desde Epoch

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000); // Dentro de 3 dias
console.log(fechaSalida);


// =========================================================================
//          METÓDOS Y PROPIEDADES PARA ARRAYS
// =========================================================================

let frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia'];


// Propiedades
console.log(frutas.length); // Devuelve el número de elementos del array

// METODOS MUTABLES (modificar los valores de la variable)

let frutaExtraida = frutas.pop(); // Extraeel último elemento del array
console.log(frutaExtraida);
console.log(frutas);

frutas.push('Fresa', 'Banana'); // Añade uno o varios elementos al final del array
console.log(frutas);

frutas.shift(); // Extrae el primer elemento del array y desplaza a la izquierda el resto
console.log(frutas);

frutas.unshift('Sandia', 'Piña'); // Añade uno o varios elementos al inicio del array desplazando el   resto a la derecha
console.log(frutas);


// Método splice para eliminar o sustituir elementos
// splice(indice, cantidad, elementos opcionales a sustituir)

frutas.splice(1, 2);
console.log(frutas);

frutas.splice(1, 2, 'Piña', 'Pera');
console.log(frutas);

frutas.splice(2, 0, 'Fresa', 'Naranja');
console.log(frutas);

frutas.sort();
console.log(frutas);

frutas.reverse();
console.log(frutas);

// Los métodos en javascript se pueden encadenar

let marcaAutos = ['Toyota', 'Audi', 'Mercedes', 'Susuki', 'Lamborghini', 'Ferrari'];
marcaAutos.sort().reverse();
console.log(marcaAutos);


// METODOS INMUTABLES (modificar los valores de la variable)

console.log(frutas);

let frutasSeleccionadas = frutas.slice(2,4); //Extrae elementos desde una posición incluida hasta otra posición excluida
console.log(frutasSeleccionadas);

let hayPomelo = frutas.includes('Pomelo'); // Devuelve true o false degun exista el elemento o no
console.log(hayPomelo);

let cadena = frutas.join(' | '); // Une los elementos separados por el string del argumento por defecto una ','
console.log(cadena);

console.log(marcaAutos);
marcaAutos = marcaAutos.concat('Roll roys');
console.log(marcaAutos);

let autos = ['Renault', 'Volvo'];
autos = autos.concat(marcaAutos);
console.log(autos);
console.log(marcaAutos);



