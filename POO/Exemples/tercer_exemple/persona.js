class Persona{
    
    constructor(nom, edat, caracter){
        this._nom = nom;
        this._edat = edat;
        this._caracter = caracter 
        this._bonaGent = true;
    }
    
    
    //GETTERS i SETTERS
    get edat(){                     //el nom del get, definirà el objecte.nom
        return this._edat;
    }

    set edat (edat){                //el nom del get, definirà el objecte.nom
        this._edat = edat;
    }
    
    get caracter(){
        return this._caracter;
    }

    set caracter (caracter){
        this._caracter = caracter;
    }
    
    
    //METODES DE LA CLASSE
    parlar(paraula){
        console.log("Estic dient: " +paraula);
    }
    
    caminar(){
        console.log("Estic caminant");
    }

    creixer(numAnys){
        console.log("Abans tenia " + this._edat+ " anys");
        this._edat +=  numAnys;
        console.log("Ara tinc " + this._edat+ " anys");
    }

    
    //Mètode estàtic
    static llenguatge() {
        console.log("Les persones parlem per comunicar-nos");
      }

    
      //Sobrecàrrega de mètodes
      caminar(velocitat){
        console.log("Estic caminant a una velocitat: " +velocitat);
    }

}