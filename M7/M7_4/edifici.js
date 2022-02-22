class Edifici{
    
    constructor(nom, numPlantes, superficie){
        this._nom = nom;
        this._numPlantes = numPlantes;
        this._superficie = superficie;
    }

    get getNom(){
        return this._nom;
    }

    get getNumPlantes(){
        return this._numPlantes;
    }

    get getSuperficie(){
        return this._superficie;
    }

    netejar(){
        let minuts = (this._superficie / 5) + (0,5 * (this._numPlantes - 1));
        let hores = minuts / 60;
        let costMensual = minuts * 30;
        let resposta = "S'ha trigat " + hores + " hores en netejar l'edifici " + this._nom + ". " + 
        "El cost mensual de la neteja és de " + costMensual + " €.";
        return resposta;
    }

    calcularCostVigilancia(sup, sou){  //sup: la superficie que pot vigilar cada vigilant
        let numVigilants = Math.ceil(this._superficie / sup);
        let cost = numVigilants * sou;
        let resposta;
        resposta = "Cost mensual de la vigilància: " + cost + " €.";
        return resposta;
    }

    mostrarDadesEdifici(){
        let resposta;
        resposta = "Nom: " + this._nom + "<br>" + 
        "Número de plantes: " + this._numPlantes + "<br>" + 
        "Superfície: " + this._superficie;
        return resposta;
    }
}