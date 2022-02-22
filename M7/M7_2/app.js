
let llistaComptes = [];
console.log(llistaComptes);

function verificaUser(titular, compte){
    let i;
    let resposta = -1;
    for (i = 0; i < llistaComptes.length && llistaComptes.length != 0; i++){
        if (titular == llistaComptes[i].getTitular && compte == llistaComptes[i].getNumCompte){
            resposta = i;
            break;
        } else {
            resposta = -1;
        }
    } 
    return resposta;
}

function altaCompte(){
    let titular = prompt("Nom i cognom:");
    let numCompte = prompt("Numero de compte:");
    let a = verificaUser(titular, numCompte);
    if (a == -1){
        let alta = new Compte(titular, numCompte);
        llistaComptes.push(alta);
        alert("Compte creat. Gràcies per confiar en nosaltres.");
    } else {
        alert("Ho sentim, ja existeix un compte amb aquest número o titular.");
        alert(llistaComptes[a].veureCompte());
    }
    console.log(llistaComptes);
}  

function baixaCompte(){
    let titular = prompt("Nom i cognom:");
    let numCompte = prompt("Numero de compte:")
    let a = verificaUser(titular, numCompte);
    if (a == -1){
        alert("Aquest numero de compte o usuari no existeix.");
    } else {
        llistaComptes.splice(a, 1);
        alert("Ja hem eliminat el compte.");
    }
    console.log(llistaComptes);
}  

function verCompte(){  
    let titular = prompt("Nom i cognom:");
    let numCompte = prompt("Numero de compte:")
    let a = verificaUser(titular, numCompte);
    if (a == -1){
        alert("Aquest numero de compte o usuari no existeix.");
    } else {
        alert(llistaComptes[a].veureCompte());
    }
    console.log(llistaComptes);
}  

function operacions(){
    let titular = prompt("Nom i cognom:");
    let numCompte = prompt("Numero de compte:")
    let a = verificaUser(titular, numCompte);
    if (a == -1){
        alert("Aquest numero de compte o usuari no existeix.");
    } else {
        let opcio = parseInt(prompt("Quina operació vol fer? 1: ingrés 2: retirar 3: veure transaccions 4: veure saldo"));
        switch (opcio) {
            case 1:
                let importe = parseInt(prompt("Quant vol ingressar?"));
                let operacio = llistaComptes[a].ingressarEuros(importe);
                alert("Operació realitzada. Saldo actual: " + operacio + "€");
                break;
            case 2:
                let importe2 = parseInt(prompt("Quant vol retirar?"));
                let operacio2 = llistaComptes[a].retirarEuros(importe2);
                alert("Operació realitzada. Saldo actual: " + operacio2 + "€");
                break;
            case 3:
                let operacio3 = llistaComptes[a].veureTransaccions();
                alert("Total de transaccions realitzades: " + operacio3);
                break;
            case 4:
                let operacio4 = llistaComptes[a].veureSaldo()
                alert("Saldo actual: " + operacio4);
                break;
        
            default:
                break;
        }
    }
}