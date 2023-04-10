## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayorÃ­a) NO SON ABSOLUTAS. Es completamente vÃ¡lido (en la mayorÃ­a de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la secciÃ³n de comentarios del curso. :D


## Variables y operaciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una variable y para quÃ© sirve?

Cajtas (espacios en memoria) donde podemos guardar informaciÃ³n (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- Â¿CuÃ¡l es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- Â¿CuÃ¡l es la diferencia entre sumar nÃºmeros y concatenar strings?
- Â¿CuÃ¡l operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar nÃºmeros cuando lo usamos con nÃºmeros. Pero cuando los strings, lo que hace es unir (concatenar, asÃ­ se dice) ambos strings.

### 2ï¸âƒ£ Determina el nombre y tipo de dato para almacenar en variables la siguiente informaciÃ³n:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrÃ³nico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3ï¸âƒ£ Traduce a cÃ³digo JavaScript las variables del ejemplo anterior y deja tu cÃ³digo en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4ï¸âƒ£ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una funciÃ³n?

Las funciones nos permiten encapsular (guardar) bloques de cÃ³digo para reutilizarlos y ejecutarlos en el futuro.

- Â¿CuÃ¡ndo me sirve usar una funciÃ³n en mi cÃ³digo?

Nos sirve cuando tenemos variables o bloques de cÃ³digo muy parecidos (con cambios que podrÃ­an ser parÃ¡metros y argumentos) que podemos encapsular para reutilizar mÃ¡s de una vez en el futuro.

TambiÃ©n nos sirve para ordenar y mejorar la legibilidad de nuestro cÃ³digo.

- Â¿CuÃ¡l es la diferencia entre parÃ¡metros y argumentos de una funciÃ³n?

las funciones reciben parÃ¡metros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

### 2ï¸âƒ£ Convierte el siguiente cÃ³digo en una funciÃ³n, pero cambiando cuando sea necesario las variables constantes por parÃ¡metros y argumentos en una funciÃ³n:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");  
}
```


## Condicionales

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un condicional?

Son la forma en que ejecutamos un bloque de cÃ³digo u otro dependien de alguna condiciÃ³n o validaciÃ³n.

- Â¿QuÃ© tipos de condicionales existen en JavaScript y cuÃ¡les son sus diferencias?

IF (else y else if), Switch
El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si asÃ­ queremos) en cada validaciÃ³n o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condiciÃ³n que definimos en el switch.

- Â¿Puedo combinar funciones y condicionales?

SÃ­. Las funciones pueden encapsular cualquier bloque de cÃ³digo, incluyendo condicionales.

### 2ï¸âƒ£ Replica el comportamiento del siguiente cÃ³digo que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
       break;
   case "ExpertDuo":
       console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
       break;
}
```

```js
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
} else if (tipoDeSuscripcion == 'ExpertDuo') {
    console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
}
```

### 3ï¸âƒ£ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> ðŸ’¡ Bonus: si ya eres una experta o experto en el lenguaje, te desafÃ­o a comentar cÃ³mo replicar este comportamiento con arrays y un solo condicional. ðŸ˜


## Ciclos

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un ciclo?

La forma de ejecutar un bloque de cÃ³digo hasta que se cumpla cierta condiciÃ³n.

- Â¿QuÃ© tipos de ciclos existen en JavaScript?

While, do while y for.

- Â¿QuÃ© es un ciclo infinito y por quÃ© es un problema?

Es cuando la validaciÃ³n de nuestros condicionales nunca se cumple y termina toteando (daÃ±ando) la aplicaciÃ³n (e.j. cuando el navegador ya no puede mÃ¡s de tanta ejecuciÃ³n de ese bloque de cÃ³digo).

- Â¿Puedo mezclar ciclos y condicionales?

SÃ­, aunque los ciclos son una especie de condionales, nada nos impide agregar mÃ¡s condionales dentro del ciclo.

### 2ï¸âƒ£ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3ï¸âƒ£ Escribe un cÃ³digo en JavaScript que le pregunte a los usuarios cuÃ¡nto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> ðŸ’¡ Pista: puedes usar la funciÃ³n prompt de JavaScript.

```
while (respuesta != '4') {
    let pregunta = prompt('Â¿CuÃ¡nto es 2 + 2?')
    respuesta = pregunta;
}
```


## Listas

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un array?

Es una lista de elementos.

```
const array = [1, 'jaja', true, false, { nombre: 'lala', edad: 3 }];
```

- Â¿QuÃ© es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave.

```js
const obj = {
  nombre: 'Fulanito',
  edad: 3,
  comidasFavoritas: ['Pollo frito', 'vegetales'],
};
```

- Â¿CuÃ¡ndo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demÃ¡s (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- Â¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

SÃ­. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

### 2ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima su primer elemento.

```js
function imprimirPrimerElementoArray(arr) {
    console.log(arr[1])
}
```

### 3ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```

### 4ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier objeto como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```
```js
const tiposDesuscripciones = {
    free: 'solo puedes tomar los cursos gratis',
    basic: 'casi todos los cursos de platzi',
    expert: 'puedes usar todos los cursos de platzi',
    expertduo: 'los beneficios de expert para 2 personas',
};

function consguirTipoSuscripcion(suscripcion) {
    if (tiposDesuscripciones[suscripcion]) {
        console.log(tiposDesuscripciones[suscripcion]);
        return;
    }
        
    console.warn('Ese tipo de suscripcion no existe')
}
```

Los ciclos while primero ejecutan y después validan su condicional. Mientras que los ciclos do while primero validan su condición y luego sí ejecutan su bloque de código.

a
Falso x

b
Verdadero

Tienes un condicional if dentro de una función. Si tu condicional se cumple, el resto de tu función NO se debe ejecutar. ¿Cómo lo harías?


a
Agregando un break; antes de que termine mi condicional.


b x
Agregando un return; antes de que termine mi condicional.


c
No se puede. Los condicionales pueden terminar la ejecución de sí mismos, pero no de la función donde los encapsulemos