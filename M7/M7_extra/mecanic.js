class Mecanic extends Treballador{

    constructor(nom, cognom, antiguitat){
        super(nom, cognom, antiguitat)
        this._estudisSup = true;
        this._sou = this._sou + (10000 * this._antiguitat);
    }

    teEstudisSuperiors(){
        this._estudisSup = false;
    }

    mostrarDades(){
        return `Nom: ${this._nom}. Cognom: ${this._cognom}. Antiguitat: ${this._antiguitat}. Estudis superiors: ${this._estudisSup}. Sou: ${this._sou} €.`;
    }
}