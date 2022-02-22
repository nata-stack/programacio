class Escuderia{
    
    constructor(nom, pressupost, pais_origen){
        this._nom = nom;
        this._pressupost = pressupost;
        this._paisOrigen = pais_origen;
        this._cotxes = [];
        this._treballadors = [];
    }

    guardarTreballador(nouTreballador){
        this._treballadors.push(nouTreballador);
    }

    guardarCotxe(nouCotxe){
        this._cotxes.push(nouCotxe);
    }

    mostrarDades(){
        let resposta = "Nom: " + this._nom + ". Pressupost: " + this._pressupost + ". Pais d'origen: " + this._paisOrigen;
        return resposta;
    }

    get getTreballadors(){
        return this._treballadors;
    }
    
    get getNom(){
        return this._nom;
    }

    get getCotxes(){
        return this._cotxes;
    }
} 