let _1a = new Asiento(1, "a");
let _1b = new Asiento(1, "b");
let _1c = new Asiento(1, "c");
let _1d = new Asiento(1, "d");
let _1e = new Asiento(1, "e");
let _2a = new Asiento(2, "a");
let _2b = new Asiento(2, "b");
let _2c = new Asiento(2, "c");
let _2d = new Asiento(2, "d");
let _2e = new Asiento(2, "e");
let _3a = new Asiento(3, "a");
let _3b = new Asiento(3, "b");
let _3c = new Asiento(3, "c");
let _3d = new Asiento(3, "d");
let _3e = new Asiento(3, "e");

let arrayAsientos = [_1a, _1b, _1c, _1d, _1e, _2a, _2b, _2c, _2d, _2e, _3a, _3b, _3c, _3d, _3e];

let peli = new Peli("ET", 90, 8, "Spielberg")

let sala = new Sala(peli, 6, arrayAsientos);

let E1 = new Espectador("Pepe", 20, 15);
let E2 = new Espectador("Sara", 24, 200);
let E3 = new Espectador("Ana", 60, 3);
let E4 = new Espectador("Juli", 45, 78);
let E5 = new Espectador("Gabi", 30, 2000);
let E6 = new Espectador("Pau", 6, 16);
let E7 = new Espectador("Isabel", 3, 15);
let E8 = new Espectador("Seba", 47, 5000);
let E9 = new Espectador("Estela", 39, 600);
let E10 = new Espectador("Paqui", 41, 4);

function suficienteDinero(espectador, sala){
    let resposta = false;
    if(espectador.getDinero >= sala.getPreuEntrada){
        resposta = true;
    }
    return resposta;
}

function suficienteEdad(espectador, peli){
    let resposta = false;
    if(espectador.getEdad >= peli.getEdadMin){
        resposta = true;
    }
    return resposta;
}

function espacioLibre(a){
    let i;
    let resposta = false;
    for(i = 0; i < a.length; i++){
        if(a[i].getLibre == true){
            resposta = true;
            break;
        }
    }
    return resposta;
}

function sentando(espectador, sala, peli){
    console.log(`Sentando a ${espectador.getNombre}, con ${espectador.getEdad} años y ${espectador.getDinero} euros.`)
    let resposta;
    let asientoAsignado = false;
    let i;
    let seient;
    
    if(suficienteDinero(espectador, sala) == false){
        resposta = "El espectador no tiene suficiente dinero.";  
        asientoAsignado = true;
    } else if(suficienteEdad(espectador, peli) == false){
        resposta = "El espectador no tiene suficiente edad.";
        asientoAsignado = true;
    } else if(espacioLibre(arrayAsientos) == false){
        resposta = "No queda sitio en la sala.";
        asientoAsignado = true;
    }        

    /*
    while(asientoAsignado == false){          
        if(suficienteDinero(espectador, sala) == true && suficienteEdad(espectador, peli) == true && espacioLibre(arrayAsientos) == true){
            i = Math.floor((Math.random() * 15));
            seient = arrayAsientos[i];     
            if(seient.getLibre == true){
                seient.asientoOcupado();  //revisar el mètode aquest!!!
                resposta = "Sentada en el asiento " + seient.getNum + seient.getLetra;
                asientoAsignado = true;
            } else if(seient.getLibre == false){
                resposta = "El asiento " + seient.getNum + seient.getLetra + " está ocupado. Tratando de buscar otro asiento.";
                console.log(resposta);
            }  
        }
    } 
    */

    
    //el mateix però sense comprovar si el seient està lliure pq quan l'assignem l'eliminem de l'array
    if(suficienteDinero(espectador, sala) == true && suficienteEdad(espectador, peli) == true && espacioLibre(arrayAsientos) == true){
        i = Math.floor((Math.random() * arrayAsientos.length));
        seient = arrayAsientos[i];     
        resposta = "Sentada en el asiento " + seient.getNum + seient.getLetra;
        arrayAsientos.splice(i, 1);
    }
    
         


    console.log(resposta);
}

//Empieza simulación
console.log(`Llenando la sala para la película ${peli.getTitulo} con precio ${sala.getPreuEntrada} € para mayores de ${peli.getEdadMin} años.`);
sentando(E1, sala, peli);
sentando(E2, sala, peli);
sentando(E3, sala, peli);
sentando(E4, sala, peli);
sentando(E5, sala, peli);
sentando(E6, sala, peli);
sentando(E7, sala, peli);
sentando(E8, sala, peli);
sentando(E9, sala, peli);
sentando(E10, sala, peli);
console.log("Se ha gestionado todo el público :)");
