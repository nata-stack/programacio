class Hospital extends Edifici{
    
    constructor(nom, numPlantes, superficie, numMalalts){
        super (nom, numPlantes, superficie);
        this._numMalalts = numMalalts;
    }

    get getNumMalalts(){
        return this._numMalalts;
    }

    set setNumMalalts(numMalalts){
        this._numMalalts = numMalalts;
    }

    calcularCostVigilancia(){
        let sup = 1000;
        let sou = 1800;
        return super.calcularCostVigilancia(sup, sou);
    }

    repartirDinar(){
        let resposta = "S'estan repartint " + this._numMalalts + " racions.";
        return resposta;
    }

}