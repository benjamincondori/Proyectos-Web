// ==========================================================
//              CLASES EN TYPESCRIPT
// ==========================================================

// Implementar el tipo de miembros y modificadores de acceso

class Jugador {

    public nombre: string;
    public apellidos: string;
    private goles: number;

    constructor(nombre: string, apellidos: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setGoles(goles: number): void {
        this.goles = goles;
    } 

    getGoles(): number {
        return this.goles;
    }

}

let jugador1 = new Jugador('Lionel', 'Messi');
let jugadores: Array<Jugador>;

// jugadores = [jugador1, {nombre: 'Sergio', apellidos: 'Ramos'}]; Error

jugador1.nombre = 'Leo';
// jugador1.goles = 10; Error




// Sintaxis de constructor breve para clases

class Player {

    constructor(public nombre: string, public apellidos: string, private goles: number) {

    }

    setGoles(goles: number): void {
        this.goles = goles;
    }

    getGoles(): number {
        return this.goles;
    }

}


// INTERFACES

interface DatosMaestros {
    nombre: string;
    ci: string;
}

class Proveedor implements DatosMaestros {

    nombre: string;
    ci: string;
    formaPago: string;

    constructor(nombre: string, ci: string) {
        this.nombre = nombre;
        this.ci = ci;
    }

    // Resto de métodos, etc...

}



