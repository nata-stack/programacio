//genera posiciones bala aleatoriament, instancia Revolver
let posicionBala = Math.floor(Math.random() * 6); 
let posicionActual = Math.floor(Math.random() * 6);
let revolver = new Revolver(posicionActual, posicionBala);

//array jugadores y instancia nuevo juego
let jugadores = [];
let juego = new Juego(jugadores, revolver)  

console.log(juego);


function jugadors(){
    let numJugadors = parseInt(prompt("Quantes persones juguen?"));
    let i;
    let id;
    let nom;

    for(i = 0; i < numJugadors; i++){
        id = i + 1;
        nom = prompt("Jugador/a " + (i + 1) + ". Nom: ");
        let jugador = new Jugador(id, nom);
        jugadores.push(jugador);
    }
    console.log(juego);
}

function empezar(){
    let i;
    for(i = 0; i < jugadores.length; i++){
        jugadores[i].jugar(revolver);
        revolver.siguienteBala();
        revolver.informa();
    }
   
}

/*
function jugar(){
    let i;
    let sort;
    for(i = 0; i < jugadores.length; i++){
        sort = juego.ronda(i);
        if(sort == false){
            console.log(jugadores[i].getNickname() + " se dispara. No ha muerto en esta ronda.");
        } else {
            console.log(jugadores[i].getNickname() + " se dispara. HA MUERTO.")
        }
    }
}
*/