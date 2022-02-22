class Jugador{
    constructor(id, name){
        this._id = id;
        this._name = name;
        this._nickname = this._name + this._id;
        this._alive = "yes";
    }

    get getId(){
        return this._id;
    }
    get getNickname(){
        return this._nickname;
    }
    get getAlive(){
        return this._alive;
    }

    jugar(revolver){   //el jugador se apunta y se dispara, si la bala se dispara, el jugador muere
        if(revolver.disparar() == true){
            this._alive = "no";
        }
    }
}