class Asiento{
    constructor(num, letra){
        this._num = num;
        this._letra = letra;
        this._libre = true;
    }

    get getLibre(){
        return this._libre;
    }

    get getNum(){
        return this._num;
    }

    get getLetra(){
        return this._letra;
    }

    asientoOcupado(){  //és el setter
        this._libre = false;
    }                              
}