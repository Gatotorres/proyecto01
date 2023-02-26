let h1 = document.querySelector('h1');
let input1 = document.querySelector('#calculo1');
let input2 = document.querySelector('#calculo2');
let btn = document.querySelector('#btnCalcular');
let form = document.querySelector('#form');
let pResult = document.querySelector('#result');



form.addEventListener('submit',sumarInputsValues);

function sumarInputsValues(event) {
    console.log({event});
    event.preventDefault();
    let sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
