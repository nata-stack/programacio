let llistaHotels = [];
let llistaHospitals = [];
let llistaCinemes = [];


function altaEdifici(){
    let tipus = prompt("Donar d'alta: 1: hotel.... 2: cinema.... 3: hospital.");
    let nom = prompt("Nom:");
    let numPlantes = parseInt(prompt("Número de plantes:"));
    let superficie = parseInt(prompt("Superfície:"));
    switch (tipus) {
        case "1":
            let numHabitacions = parseInt(prompt("Número d'habitacions:"));
            let nouHotel = new Hotel(nom, numPlantes, superficie, numHabitacions);
            llistaHotels.push(nouHotel);7
            alert("L'hotel ha estat donat d'alta.");
            break;
        case "2":
            let aforament = parseInt(prompt("Aforament:"));
            let nouCinema = new Cinema(nom, numPlantes, superficie, aforament);
            llistaCinemes.push(nouCinema);
            alert("El cinema ha estat donat d'alta.");
            break;
        case "3":
            let numMalalts = parseInt(prompt("Número de malalts:"));
            let nouHospital = new Hospital(nom, numPlantes, superficie, numMalalts);
            llistaHospitals.push(nouHospital);
            alert("L'hospital ha estat donat d'alta.");
            break;
    
        default:
            alert("Indiqui una opció: 1 >> hotel, 2 >> cinema o 3 >> hospital.");
            break;
    }
    console.log("Hotels");
    console.log(llistaHotels);
    console.log("Hospitals");
    console.log(llistaHospitals);
    console.log("Cinemes");
    console.log(llistaCinemes);
}

function baixaEdifici(){
    let nom = prompt("Nom de l'edifici que vol donar de baixa:");
    let resposta = "No hi ha cap edifici amb aquest nom.";
    for(i = 0; i < llistaHotels.length; i++){
        if(nom == llistaHotels[i].getNom){
            llistaHotels.splice(i, 1);
            resposta = "Edifici eliminat.";
        }
    }
    for(i = 0; i < llistaHospitals.length; i++){
        if(nom == llistaHospitals[i].getNom){
            llistaHospitals.splice(i, 1);
            resposta = "Edifici eliminat.";
        }
    }
    for(i = 0; i < llistaCinemes.length; i++){
        if(nom == llistaCinemes[i].getNom){
            llistaCinemes.splice(i, 1);
            resposta = "Edifici eliminat.";
        }
    }
    alert(resposta);
    console.log("Hotels");
    console.log(llistaHotels);
    console.log("Hospitals");
    console.log(llistaHospitals);
    console.log("Cinemes");
    console.log(llistaCinemes);
}

function mostrarHotel(){
    let nom = prompt("Nom de l'hotel que voleu veure:");
    let resposta;
    for(i = 0; i < llistaHotels.length; i++){
        if(nom == llistaHotels[i].getNom){
            resposta = llistaHotels[i].mostrarDadesEdifici() + "<br>" 
            + "Neteja: " + llistaHotels[i].netejar() + "<br>" 
            + "Vigilancia: " + llistaHotels[i].calcularCostVigilancia() + "<br>" 
            + "Servei d'habitacions: " + llistaHotels[i].serveiHabitacions();
            break;
        } else {
            resposta = "No tenim cap hotel amb aquest nom a l'aplicació.";
        }
    }
    document.getElementById("resultats").innerHTML = resposta;
}

function mostrarHospital(){
    let nom = prompt("Nom de l'hospital que voleu veure:");
    let resposta;
    for(i = 0; i < llistaHospitals.length; i++){
        if(nom == llistaHospitals[i].getNom){
            resposta = llistaHospitals[i].mostrarDadesEdifici() + "<br>" 
            + "Neteja: " + llistaHospitals[i].netejar() + "<br>" 
            + "Vigilancia: " + llistaHospitals[i].calcularCostVigilancia() + "<br>" 
            + "Dinars: " + llistaHospitals[i].repartirDinar();
            break;
        } else {
            resposta = "No tenim cap hospital amb aquest nom a l'aplicació.";
        }
    }
    document.getElementById("resultats").innerHTML = resposta;
}

function mostrarCinema(){
    let nom = prompt("Nom del cinema que voleu veure:");
    let resposta;
    for(i = 0; i < llistaCinemes.length; i++){
        if(nom == llistaCinemes[i].getNom){
            resposta = llistaCinemes[i].mostrarDadesEdifici() + "<br>" 
            + "Neteja: " + llistaCinemes[i].netejar() + "<br>" 
            + "Vigilancia: " + llistaCinemes[i].calcularCostVigilancia() + "<br>"
            + llistaCinemes[i].projectarSessio();
            break;
        } else {
            resposta = "No tenim cap cinema amb aquest nom a l'aplicació.";
        }
    }
    document.getElementById("resultats").innerHTML = resposta;
}
