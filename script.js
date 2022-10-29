/*
console.log("Hola, Mundo...")

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
 }

 function encontrarSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        tiposDeSuscripciones[suscripcion];
        console.log(tiposDeSuscripciones[suscripcion]);
        return
    };
    console.warn("Este tipo de suscripcion no existe!!!");
    
 }
console.log(encontrarSuscripcion("expert"))
*/

/*
//primeras pruebas

const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const p = document.querySelector('p');
const img = document.createElement('img');

const pid = document.getElementById('pid');

h1.innerHTML = "H1 cambió de nombre";
p.innerHTML = "Hello, world";
input.value ="Isabella";

img.setAttribute('src','https://bsc.pe/wp-content/uploads/2016/06/logo-website-1.png');
pid.innerHTML="";
pid.append(img);
*/

//segunda prueba de manipulacion del DOM
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click',btnOnClick);

function btnOnClick(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: "+suma;
}

