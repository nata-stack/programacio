class Revolver{
    constructor(posicionActual, posicionBala){
        this._posicionActual = posicionActual;
        this._posicionBala = posicionBala;
        this._tambor = [0, 0, 0, 0, 0, 0];
    }

    get getPosicionActual(){
        return this._posicionActual;
    }

    get getPosicionBala(){
        return this._posicionBala;
    }

    disparar(){
        let resposta = false;
        if(this._posicionActual == this._posicionBala){
            resposta = true;
        }
        return resposta;
    }

    siguienteBala(){
        this._posicionActual += 1;
    }

    informa(){
        return "Posición actual: " + this._posicionActual + "Posición bala: " + this._posicionBala;
    }
}