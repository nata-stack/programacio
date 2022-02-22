class Client{
    constructor(nom){
        this._nom = nom;
        this._comptes = [];  //array que s'omplira amb objectes de la classe Compte
    }
    get getNom(){
        return this._nom;
    }
    get getComptes(){
        return this._comptes;
    }
    pujarCompte(nouCompte){
        this._comptes.push(nouCompte);
    }
    accesCompte(numCompte){  //busca un numero de compte a l'objecte Compte a l'array comptes
        let i;
        for (i = 0; i < this._comptes.length - 1; i++) {
            if (this._comptes[i].getNumCompte == numCompte) {
                break;
            }
        }
        return this._comptes[i];
    }
}