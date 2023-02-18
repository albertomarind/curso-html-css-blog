let numero1 = 7;
let numero2 = 5;

let resultado = sumar(numero1, numero2);

//console.log(resultado)

//Funcion declarada
function sumar(n1, n2) {
    return n1 + n2;
}

//Funcion expresada
let restar = function (n1, n2) {
    return n1 - n2
}

restar(10, 5);

let resultadoDivision = dividir(1);

//console.log(resultadoDivision);

function dividir(n1, n2 = 1) {

    return n1 / n2;
}

//;
//
// request('GET', 'https://jsonplaceholder.typicode.com/users', function (usuarios) {
//     let primerUsuario = usuarios[0];
//     request(
//         'GET',
//         `https://jsonplaceholder.typicode.com/todos?userId=${primerUsuario.id}`,
//         function (todo) {
//             console.log(todo);
//         })
// });
//
// function request(metodo, url, callback) {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         callback(JSON.parse(xhttp.responseText));
//     }
//     xhttp.open(metodo, url);
//     xhttp.send();
// }

let persona = { // Object Literal
    nombre: 'jose',
    edad: 15,
    estaCasado: false,
    caminar: function () {
        console.log('Hola, mi nombre es ' + this.nombre + ' y estoy caminando...');
    },
    saltar() {
        console.log(`Hola, mi nombre es ${this.nombre} y estoy saltando...`);
    },
    hablar: () => { //Arrow functions o funciones de flecha
        console.log('Hola, mi nombre es ' + this + ' y estoy hablando...')
    }
};

let personaAssign = Object.assign(persona, {
    nombre: 'Pepe',
    edad: 16,
    estaCasado: true
});
//personaAssign.caminar();

let nuevaPersona = {
    ...persona,
    nombre: 'Pepe2',
    edad: 16,
    estaCasado: true
};
nuevaPersona.caminar();


console.log(nuevaPersona === persona);

// persona.caminar();
// persona.saltar();
// persona.hablar();

//Funciones constructoras
function Persona(nombre, edad, estaCasado) {
    this.nombre = nombre;
    this.edad = edad;
    this.estaCasado = estaCasado;
    this.caminar = function () {
        console.log('Hola, mi nombre es ' + this.nombre + ' y estoy caminando...');
    };
    this.saltar = function () {
        console.log(`Hola, mi nombre es ${this.nombre} y estoy saltando...`);
    };
    this.hablar = function () { //Arrow functions o funciones de flecha
        console.log('Hola, mi nombre es ' + this + ' y estoy hablando...')
    };
}

let miPersona1 = new Persona('Pedro', 15, false);
let miPersona2 = new Persona('Jose', 16, true);
let miPersona3 = new Persona('Moises', 18, false);

// miPersona1.caminar();
// miPersona2.caminar();
// miPersona3.caminar();












