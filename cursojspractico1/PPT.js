function random_item(items)
var items = [piedra, papel, tijeras];
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


console.log(random_item(items));


var jugada = prompt ("Elije piedra, papel o tijera");
if (jugada === "piedra") {
    console.log("Jugador a elegio Piedra");
    jugada = "piedra"
} else if (jugada === "papel") {
    jugada = "papel"
    console.log("Jugador a elegio Papel");
}else {
    console.log("Jugador ha elegido Tijera");
    jugada = "tijera"
}

var opciones = {
    "piedra",
    "papel",
    "tijera",
}
var randomOpciones = opciones[Math.floor(Math.random() * opciones.length)];
console.log(randomOpciones)

    const answers = [ "piedra", "papel", "tijera"]; const randomlyPickedString=answers[Math.floor(Math.random() * answers.length)]; console.log(randomlyPickedString);
    maquina = randomlyPickedString 

function juego(jugada, maquina)
{
    if maquina === jugada {
        console.log("es un empate")
    }
    else if (jugada === "piedra" && maquina ==="papel" || 
    jugada === "papel" && maquina === "tijera"|| 
    jugada === "tijera" && maquina ==="piedra")
    {   console.log("ha ganado la Machine")
}    
    console.log("ha ganado la Machine")
    else if
}

var numero = 1;

var resultado = numero === 1 ? "Si, soy un uno" : "no soy un uno";

function game(player, machine)
{
    if (player === machine)
    {
        console.log("es un empate")
    }
    else if (player === "piedra" && machine === "papel" || player === "papel" &&
    machine === "tijera" || player === "tijera" && machine === "piedra" )
    {
        console.log("Gana la Machine")
    }
    else if (player === "piedra" && machine === "tijera" || player === "papel" &&
    machine === "piedra" || player === "tijera" && machine === "papel" )
    {
        console.log("Jugador Gana")
    }
    else
    {
        console.log("por favor escribir una opcion valida")
    }
}

game(piedra, piedra)