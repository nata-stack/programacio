let ferrari = new Escuderia("ferrari", 2000000, "Italia");
let honda = new Escuderia("honda", 3000000, "Japó");
let cotxe1 = new Cotxe(200, 300, "verd", 40000);
let cotxe2 = new Cotxe(300, 400, "vermell", 50000);
ferrari.guardarCotxe(cotxe1);
ferrari.guardarCotxe(cotxe2);
honda.guardarCotxe(cotxe1);
honda.guardarCotxe(cotxe2);

let arrayEscuderies = [ferrari, honda];
console.log(arrayEscuderies);

function buscarEscuderia(escuderia){
    let i;
    let resposta;
        for(i = 0; i < arrayEscuderies.length; i++){
            if(arrayEscuderies[i].getNom == escuderia){
                resposta = i;
                break;
            } else {
                resposta = -1;
            }
        }
    return resposta;
}

function alta(){
    let escuderia = prompt("A quina escuderia vol donar d'alta un treballador?").toLowerCase();
    let i = buscarEscuderia(escuderia);
    if(i != -1){
        escuderia = arrayEscuderies[i];
    } else {
        alert("Aquesta escuderia no existeix a la nostra aplicació.");
        alta();
    }
    
    let nom = prompt("Nom del treballador: ");
    let cognom = prompt("Cognom: ");
    let antiguitat = parseInt(prompt("Antiguitat en anys: "));
    let q = prompt("Pilot (1) o mecànic (2)?");
    
    switch (q) {
        case "1":
            let alçada = parseFloat(prompt("Alçada en metres: "));
            let pes = parseInt(prompt("Pes: "));
            let nouPilot = new Pilot (nom, cognom, antiguitat, alçada, pes);
            escuderia.guardarTreballador(nouPilot);
            break;
        case "2":
            let nouMecanic = new Mecanic (nom, cognom,antiguitat);
            escuderia.guardarTreballador(nouMecanic);
            let estudis = prompt("Té estudis superiors?");
            if(estudis == "no"){
                nouMecanic.teEstudisSuperiors();
            }
            break;
    
        default:
            break;
    }
    console.log(arrayEscuderies);
}

function baixa(){
    let escuderia = prompt("A quina escuderia vol donar de baixa un treballador?").toLowerCase();
    let i = buscarEscuderia(escuderia);
    if(i != -1){
        escuderia = arrayEscuderies[i];
    } else {
        alert("Aquesta escuderia no existeix a la nostra aplicació.");
        baixa();
    }

    let nomTreb = prompt("Nom de la persona que vol donar de baixa: ");
    let e;
    for(e = 0; e < escuderia.getTreballadors.length ; e++){
        if(escuderia.getTreballadors[e].getNom == nomTreb){
            escuderia.getTreballadors.splice(e, 1);
            alert("Ja hem donat de baixa a " + nomTreb);
            break;
        } else {
            alert("No tenim cap treballador amb aquest nom.");
        } 
    }  
    console.log(arrayEscuderies);  
}

function veureTreb(){
    let treballador = prompt("De quin treballador vol feure la fitxa?")
    let i;
    for(i = 0; i < arrayEscuderies.length; i++){
        for(e = 0; arrayEscuderies[i].getTreballadors.length; e++){
            if(arrayEscuderies[i].getTreballadors[e].getNom == treballador){
                let resposta = arrayEscuderies[i].getTreballadors[e].mostrarDades();
                document.getElementById("treballadors").innerHTML = resposta;
                break;
            } else {
                alert("No tenim cap treballador amb aquest nom."); 
                break;
            }
        }
    }
}

function veureEscuderia(){
    let escuderia = prompt("Quina escuderia vols veure?").toLowerCase();
    let i = buscarEscuderia(escuderia);
    if(i != -1){
        escuderia = arrayEscuderies[i];
    } else {
        alert("Aquesta escuderia no existeix a la nostra aplicació.");
        veureEscuderia();
    }

    let resposta = escuderia.mostrarDades();
    document.getElementById("escuderies").innerHTML = "ESCUDERIA <br>" + resposta + "<br> <br>";
    for(e = 0; e < escuderia.getCotxes.length; e++){
        resposta = escuderia.getCotxes[e].mostrarDades();
        document.getElementById("escuderies").innerHTML += "Cotxe " + (e + 1) + "<br>" + resposta + "<br> <br>";
    }
}