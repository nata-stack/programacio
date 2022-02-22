class Hotel{
    constructor(nom, numHabita, numPisos, superficie){
        this._nom = nom;
        this._numHabita = numHabita;
        this._numPisos = numPisos;
        this._superficie = superficie;
    }

    get getNom(){
        return this._nom;
    }
    set setNom(nouNom){
        this._nom = nouNom;
    }
    get getNumHabita(){
        return this._numHabita;
    }
    set setNumHabita(nouHabit){
        this._numHabita = nouHabit;
    }
    get getNumPisos(){
        return this._numPisos;
    }
    set setNumPisos(nouPis){
        this._numPisos = nouPis;
    }
    get getSup(){
        return this._superficie
    }
    set setSup(nouSup){
        this._superficie = nouSup;
    }

    calcularManteniment(){
        let numPersones = 0;
        let cost = 0;
        let resposta;
        numPersones = this._numHabita / 20;
        cost = numPersones * 1500;
        resposta = "Per  fer el manteniment es necessiten " + numPersones + " persones amb un cost total de " + cost + " €.";
        return resposta;
    }
}