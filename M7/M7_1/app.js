//let hotel1 = new Hotel("Costa Brava", 300, 15, 7000);
//document.getElementById("resposta").innerHTML = hotel1.calcularManteniment();
//console.log(hotel1.calcularManteniment());




let llistaHotels = [];  

function crearHotel(){
    let a = prompt("Nom de l'hotel:");
    let b = parseInt(prompt("Número d'habitacions que té l'hotel:"));
    let c = parseInt(prompt("Número de pisos que té l'hotel:"));
    let d = parseInt(prompt("Superficie:"));
    let x = new Hotel(a, b, c, d);
    llistaHotels.push(x);
    console.log(llistaHotels);
}

function donarDeBaixaHotel(){
    let nom = prompt("Quin hotel vols donar de baixa?");
    let i;
    let resposta;
    for (i = 0; i<llistaHotels.length; i++){
        if ((nom == llistaHotels[i].getNom)){
            llistaHotels.splice(i, 1);
            resposta = "Hem eliminat l'hotel.";
            break;
        } else {
            resposta = "No tenim cap hotel amb aquest nom a la nostra aplicació.";
        }
    }
    console.log(llistaHotels);
    alert(resposta);
}

function veureHotel(){
    let nom = prompt("Quin hotel vols veure?");
    let i;
    let resposta;
    for (i = 0; i<llistaHotels.length; i++){
        if (nom == llistaHotels[i].getNom){
            resposta = "Nom: " + llistaHotels[i].getNom + "<br> Nombre d'habitacions: " 
            + llistaHotels[i].getNumHabita + "<br> Pisos: " + llistaHotels[i].getNumPisos + "<br> Superfície: " 
            + llistaHotels[i].getSup + "<br>" + llistaHotels[i].calcularManteniment();
            break;
        } else {
            resposta = "No tenim cap hotel amb aquest nom a la nostra aplicació.";
        }
    }
    document.getElementById("veureHotel").innerHTML = resposta;
}

function modificarHotel(){
    let nom = prompt("Quin hotel vols modificar?");
    let i;
    let resposta;
    for (i = 0; i<llistaHotels.length; i++){
        if (nom == llistaHotels[i]._nom){
            let mod = parseInt(prompt("1: modificar el num habitacions // 2: modificar el num plantes // 3: modificar superfície"));
            switch (mod) {
                case 1:
                    let nou1 = parseInt(prompt("Quantes habitacions tindrá ara el teu hotel?"));
                    llistaHotels[i].setNumHabita = nou1;
                    resposta = "Ja hem modificat el nombre d'habitacions de l'hotel " + nom;
                    break;
                case 2:
                    let nou2 = parseInt(prompt("Quants pisos tindrá ara el teu hotel?"));
                    llistaHotels[i].setNumPisos = nou2;
                    resposta = "Ja hem modificat el nombre de plantes de l'hotel " + nom;
                    break;
                case 3:
                    let nou3 = parseInt(prompt("Quina serà la nova superfície del teu hotel?"));
                    llistaHotels[i].setSup = nou3;
                    resposta = "Ja hem modificat la superfície de l'hotel " + nom;
                    break;
            
                default:
                    break;
            }
        } else {
            resposta = "No tenim cap hotel amb aquest nom a la nostra aplicació.";
        }
    }
    alert(resposta);
    console.log(llistaHotels);
}
