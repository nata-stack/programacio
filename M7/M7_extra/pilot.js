class Pilot extends Treballador{

    constructor(nom, cognom, antiguitat, alçada, pes){
        super(nom, cognom, antiguitat)
        this._alçada = alçada;
        this._pes = pes;
        this._sou = this._sou + (10000 * this._antiguitat) + 50000;
    }

    mostrarDades(){
        return `Nom: ${this._nom}. Cognom: ${this._cognom}. Antiguitat: ${this._antiguitat}. Alçada: ${this._alçada}. Pes: ${this._pes}. Sou: ${this._sou} €.`;
    }
}