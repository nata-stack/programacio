let llistaClients = [];
console.log(llistaClients);


function verificaUser(titular){
    let i;
    let resposta = -1;
    for (i = 0; i < llistaClients.length && llistaClients.length != 0; i++){
        if (titular == llistaClients[i].getNom){
            resposta = i;
            break;
        } else {
            resposta = -1;
        }
    } 
    return resposta;
}

function obrirCompte(){
    let inici = prompt("Ja és client del nostre banc?");
    switch (inici) {
        case "si":
            altaCompte();
            break;
        case "no":
            altaClient();
            break;
        default:
            alert("Contesti si o no. Gràcies.")
            break;
    }
}

function altaClient(){  //el client és nou, crea objecte Client i objecte Compte
    let titular = prompt("Alta com a nou client. Nom:");
    let numCompte = parseInt(prompt("Número de compte:"));
    let a = verificaUser(titular);
    if (a == -1){
        let nouCompte = new Compte(titular, numCompte);
        let nouClient = new Client(titular);
        llistaClients.push(nouClient);
        let i = llistaClients.length - 1;  
        llistaClients[i].pujarCompte(nouCompte); //guarda l'objecte Compte a la propietat comptes (que és un array) de l'objecte Clients
        alert("Compte creat. Gràcies per confiar en nosaltres.");
    } else {
        alert("Ho sentim, ja existeix un compte amb aquest titular.");
    }
    console.log(llistaClients);
}

function altaCompte(){  //el client ja existeix i té algún compte, crea nou Compte
    let titular = prompt("Nom:");
    let a = verificaUser(titular);
    if (a == -1){
        alert("No tenim cap client amb aquest nom. Revisi si ha escrit correctament el nom. Gràcies.");
    } else {
        let nouNum = parseInt(prompt("Número del nou compte:"));
        let nouCompte = new Compte(titular, nouNum);
        llistaClients[a].pujarCompte(nouCompte);

        alert("S'ha creat el nou compte.");
        console.log(llistaClients);
    }
} 

function baixaClient(){
    let titular = prompt("Titular del compte o comptes que vol donar de baixa:");
    let a = verificaUser(titular);
    if (a == -1){
        alert("No tenim cap client amb aquest nom. Revisi si ha escrit correctament el nom. Gràcies.");
    } else {
        llistaClients.splice(a, 1);
        alert("Ja hem eliminat tots els seus comptes.");
        console.log(llistaClients);
    }
}

function verCompte(){
    let titular = prompt("Titular del compte:");
    let a = verificaUser(titular);
    if (a == -1){
        alert("No tenim cap client amb aquest nom. Revisi si ha escrit correctament el nom. Gràcies.");
    } else {
        let compte = parseInt(prompt("Indiqui el num de compte que vol veure:"));
        alert(llistaClients[a].accesCompte(compte).veureCompte());
    }
}


function operacions(){
    let titular = prompt("Titular:");
    let a = verificaUser(titular);
    if (a == -1){
        alert("Aquest usuari no existeix.");
    } else {
        let numCompte = parseInt(prompt("Numero de compte:"));
        let opcio = parseInt(prompt("Quina operació vol fer? 1: ingrés 2: retirar 3: veure transaccions 4: veure saldo"));
        switch (opcio) {
            case 1:
                let importe = parseInt(prompt("Quant vol ingressar?"));
                let operacio = llistaClients[a].accesCompte(numCompte).ingressarEuros(importe);
                alert("Operació realitzada. Saldo actual: " + operacio + "€");
                break;
            case 2:
                let importe2 = parseInt(prompt("Quant vol retirar?"));
                let operacio2 = llistaClients[a].accesCompte(numCompte).retirarEuros(importe2);
                alert("Operació realitzada. Saldo actual: " + operacio2 + "€");
                break;
            case 3:
                let operacio3 = llistaClients[a].accesCompte(numCompte).veureTransaccions();
                alert("Total de transaccions realitzades: " + operacio3);
                break;
            case 4:
                let operacio4 = llistaClients[a].accesCompte(numCompte).veureSaldo()
                alert("Saldo actual: " + operacio4 + "€");
                break;
        
            default:
                break;
        }
    }
}