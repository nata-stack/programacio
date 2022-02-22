class Sala{
    constructor(peli, preuEntrada, asientos){
        this._peli = peli;  //objeto Peli
        this._preuEntrada = preuEntrada;
        this._asientos = asientos;  //array con todos los objetos Asiento
    }

    get getPreuEntrada(){
        return this._preuEntrada;
    }
}