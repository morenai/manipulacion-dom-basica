var numero = 50

switch (numero) {
    case 1:
        console.log("soy uno!");
        break;
    case 10:
        console.log("Soy un 10!!");
        break;
    case 100:
        console.log("soy un 100!!!");
        break;
    default:
        console.log("this is not a number")
}   


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