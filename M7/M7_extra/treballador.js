class Treballador{
    
    constructor(nom, cognom, antiguitat){
        this._nom = nom;
        this._cognom = cognom;
        this._antiguitat = antiguitat;
        this._sou = 50000;
    }

    get getNom(){
        return this._nom;
    }
}