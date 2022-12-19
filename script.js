
//const h1= document.querySelector('h1');
//const h1= document.querySelector('.parrafito');
//const h1= document.querySelector('#pID');
const h1= document.querySelector('h1');
const p= document.querySelector('.parrafito');
const input= document.querySelector('input');
const pA=document.querySelectorAll('p');
const pid = document.getElementById('pid');
console.log(pA);

console.log({
    h1,p
});
//puedes agregar codigo html
h1.innerHTML = 'Todo Cambio - Camila <hr>'
// tma todo como texto
//h1.innerText = 'Todo Cambio- Camila'
console.log(h1.getAttribute('pantalla'))
//para cambiar el valor de la clase
//h1.setAttribute('class','rojo')
h1.classList.add('rojo')
h1.classList.remove('verde')
//input.value = "456"
console.log(input.value);

const img = document.createElement('img');
img.setAttribute('src','./assets/img/bota.jpg')
pid.innerHTML="";
pid.append(img)

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCancular = document.querySelector('#btnCalcular')
const p_result = document.querySelector('#result');
const form = document.querySelector('#form');
form.addEventListener('submit',btnCalcular);
function btnCalcular(event){
    event.preventDefault();//para evitar que se recargue la pagina
    let result = parseInt(input1.value) + parseInt(input2.value);
    p_result.innerText=result;
    //alert(result)
}