class Juego{
    constructor(jugadores, revolver){
        this._jugadores = jugadores;
        this._revolver = revolver;
    }

    finJuego(){    //cuando un jugador muere devuelve true, em sembla que sobra, que ja tenim el metode jugar a la classe jugador
        let i;
        let resposta = false;
        for(i = 0; i < this._jugadores.length; i++){
            if(this._jugadores[i].getAlive == "no"){
                resposta = true;
            }
        }
        return resposta;
    }

    ronda(){  
        let i;
        let suerte;
        let resposta;
        for(i = 0; i < this._jugadores.length; i++){
            suerte = this._jugadores[i].jugar(this._revolver.disparar());
            if(suerte == false){
                resposta = this._jugadores[i] + " se dispara. No ha muerto en esta ronda.";
                this._revolver.siguienteBala();
                this._revolver.informa();
                return resposta;
            } else {
                resposta = this._jugadores[i] + " se dispara. HA MUERTO.";
                return resposta;
            }
        }
    }
}