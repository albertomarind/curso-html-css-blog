let inputNumero1 = document.getElementById('numero1');
let inputNumero2 = document.getElementById('numero2');
let button = document.getElementById('button');
let resultadoLabel = document.getElementById('resultado');

//Objetos para convertir tipos de datos
//Number, String, Boolean
button.addEventListener('click',function (e){
    let numero1 = Number(inputNumero1.value);
    let numero2 = Number(inputNumero2.value);
    console.log(numero1);
    console.log(numero2);

    let resultado = numero1 + numero2;
    resultadoLabel.innerText = resultado;
    // let numeroEjemplo = 6;
    // let numeroString = String(numeroEjemplo);
    // console.log(typeof numeroString);
    //
    // let valorResultado =  Boolean(valorBoolean)
   // console.log( valorResultado);
})
