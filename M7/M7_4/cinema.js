class Cinema extends Edifici{
    
    constructor(nom, numPlantes, superficie, aforament){
        super (nom, numPlantes, superficie);
        this._aforament = aforament;
    }

    calcularCostVigilancia(){
        let sup = 3000;
        let sou = 1300;
        return super.calcularCostVigilancia(sup, sou);
    }

    projectarSessio(){
        let q = prompt("Voleu calcular la recaptació?");
        let resposta;
        if(q == "si"){
            let preuEntrada = parseInt(prompt("Preu entrada:"));
            let numAssistents = parseInt(prompt("Número assistents: "));
            if(numAssistents <= this._aforament){
                let x = preuEntrada * numAssistents;
                resposta = "Recaptació: S'han recaptat " + x + " €.";
            } else {
                resposta = "Ho sentim, el número d'assistents supera l'aforament màxim permès, que és de " + this._aforament + " persones."
            }
        } else {
            resposta = "Ha triat no calcular la recaptació."
        }
        return resposta;
    }

}