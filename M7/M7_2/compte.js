class Compte{
    constructor(titular, numCompte){
        this._titular = titular;
        this._numCompte = numCompte;
        this._saldo = 50;
        this._transaccions = 0;
    }
    get getTitular(){
        return this._titular;
    }
    set setTitular(nouTitular){
        this._titular = nouTitular;
    }
    get getNumCompte(){
        return this._numCompte;
    }
    set setNumCompte(nouNum){
        this._numCompte = nouNum;
    }
    //saldo i transaccions no són modificables, no set

    ingressarEuros(importe){
        this._transaccions += 1;
        this._saldo += importe;
        return this._saldo;
    }
    retirarEuros(importe){
        this._transaccions += 1;
        this._saldo -= importe;
        return this._saldo;
    }
    veureSaldo(){  //seria el getter de saldo
        return this._saldo;
    }
    veureTransaccions(){  //getter de transaccions
        return this._transaccions;
    }
    veureCompte(){
        let text;
        text = " <> Titular: " + this._titular + " <> Número de compte: " + this._numCompte + 
        " <> Saldo: " + this._saldo + " <> Transaccions: " + this._transaccions; 
        return text;
    }
}