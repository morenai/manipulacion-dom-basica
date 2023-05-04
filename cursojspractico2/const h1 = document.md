```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//h1.innerHTML = 'Morenai';
//h1.innerText = 'mickey'
//h1.setAttribute('class', 'rojo')
//h1.classList.add('amarillo')
//h1.classList.remove('amarillo')

input.value = "456"

const img = document.createElement('img')
img.setAttribute('src', './pexels-maria-isabella-bernotti-1049298.jpg',)
console.log(img)

pid.appendChild(img);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 class='h1'> Manipulacion del DOM basica</h1>

    <input id="calculo1" placeholder="Escribe algo aqui">
    <input onchange="console.log('cambio el input')" id="calculo1" placeholder="Escribe algo aqui">
    <button onclick="console.log('un click se ha hecho')" id="btnCalcular">Calcular</button>

    <script src="./script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 class='h1'> Manipulacion del DOM basica</h1>

    <input id="calculo1" placeholder="Escribe algo aqui">
    <input id="calculo2" placeholder="Escribe algo aqui">
    <button id="btnCalcular" onclick="btnOnClick()">Calcular</button>

    <p id = "result"></p>
    <script src="./script.js"></script>
</body>
</html>
```

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs
  console.log(sumaInputs)
  console.log("recuerda que no suma .values mejor crear otra variable que sume")
}
```

```js
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick); // btnOnClick solo el nombre de funcion

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs
  console.log(sumaInputs)
  console.log("recuerda que no suma .values mejor crear otra variable que sume")
}
```
```js
const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick); // btnOnClick solo el nombre de funcion

function btnOnClick(event) {
  console.log(event)
  event.preventDefault() //evita que la pagina se recarge antes de conseguir la info deseada
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs
  console.log(sumaInputs)
  console.log("recuerda que no suma .values mejor crear otra variable que sume")
} // como cancelar un bloque de codigo completo.
```
Ya tienes en JavaScript una variable que selecciona un elemento HTML. ¿Cuál de las siguientes herramientas te permite editar su contenido?

La extensión de los archivos de JavaScript es .js.
Verdadero
2.
¿Qué herramienta te permite escuchar eventos de los usuarios sin mezclar código HTML con código JavaScript?
addEventListener
3.
¿Cuál de los siguientes bloques de código te permite imprimir un mensaje cada vez que los usuarios presionen un botón?

<button onclick="console.log('mensaje')">Botoncito</button>
4.
Ya tienes en JavaScript una variable que selecciona un elemento HTML. ¿Cuál de las siguientes herramientas te permite editar su contenido?
Todas las respuestas son correctas.
5.
¿Cómo seleccionas desde JavaScript a un elemento HTML con el id perry?
document.querySelector('#perry')

a ver si esto se actualiza
a lo mejor no
