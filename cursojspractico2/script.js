const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('submit', btnOnClick); // btnOnClick solo el nombre de funcion

function btnOnClick(event) {
  console.log(event)
  //event.preventDefault() //evita que la pagina se recarge antes de conseguir la info deseada
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs
  console.log(sumaInputs)
  console.log("recuerda que no suma .values mejor crear otra variable que sume")
} // como cancelar un bloque de codigo complet