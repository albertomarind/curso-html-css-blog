/*
* Tipos de datos
* number
* string
* boolean
*
* undefined
* null
*
*
* */

/* Number */
let edad = 5;
let cantidadEnPesos = 5.55;

/* String */
let nombre = 'Jose';
let apellido = "Lopez";
let domicilio;


/*Boolean*/
let estaActivo = true;
let recordarPassword = false;

/*BigInt*/
let valorMuyGrand = 65743213123123543543n;

let persona = ` 
Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}
Dinero: ${cantidadEnPesos}
Domicilio:${domicilio}
Activo: ${estaActivo}
`; //Sintaxis Template String

let personaObjeto = {//Object Literal
    nombre:'Pedro',
    primerApellido:'Perez',
    edad:15,
    estaCasado:false,
    caminar:function(){
        console.log('Caminando')
    }
};

let edades = [];

edades.push(1);
edades.push(2);
edades.push(3);

for(let i = 0; i < edades.length ; i++){
    console.log(edades[i]);
}
