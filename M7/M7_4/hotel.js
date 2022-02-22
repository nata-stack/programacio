class Hotel extends Edifici{
    
    constructor(nom, numPlantes, superficie, numHabitacions){
        super (nom, numPlantes, superficie);
        this._numHabitacions = numHabitacions;
    }


    calcularCostVigilancia(){
        let sup = 1000;
        let sou = 1300;
        let resposta = super.calcularCostVigilancia(sup, sou);
        return resposta;
    }

    serveiHabitacions(){
        let persones = Math.ceil(this._numHabitacions / 20);
        let cost = persones * 1000 * 30; 
        let resposta = "Per a cobrir el servei d'habitacions d'aquest hotel es necessiten " 
        + persones + " persones. El cost mensual del servei és de " + cost + " €.";
        return resposta;
    }

}