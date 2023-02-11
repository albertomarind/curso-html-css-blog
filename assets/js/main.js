// let nombre = prompt('Dame tu nombre');
// alert(nombre);
// let button = document.getElementById('myButton');


// let buttonByQuerySelector = document.querySelector('button')
// buttonByQuerySelector.style.backgroundColor = 'green';
// buttonByQuerySelector.style.color = 'white';

// let buttonClicked;

// function onClickButton(event) {
//     let textClicked = event.target.textContent;
//     let display = document.getElementById('display');
//     display.textContent = textClicked;
//     buttonClicked = textClicked;
// }

let number;

let buttons = document.querySelectorAll('.calculadora .button');
buttons.forEach((button) => {

    switch (button.textContent) {
        case '+':
            button.addEventListener('click', function (event) {
               number = document.getElementById('display').textContent; 
               document.getElementById('display').textContent = '';
            });
            break;
        case '-':
            button.addEventListener('click', function (event) {

            });
            break;
        case '*':
            button.addEventListener('click', function (event) {

            });
            break;
        case '/':
            button.addEventListener('click', function (event) {

            });
            break;
    }

    button.addEventListener('click', function (event) {
        let display = document.getElementById('display');
        display.textContent = display.textContent + event.target.textContent;
    })
})



