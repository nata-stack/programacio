class Peli{
    constructor(titulo, duracion, edadMin, direccion){
        this._titulo = titulo;
        this._duracion = duracion;
        this._edadMin = edadMin;
        this._direccion = direccion;
    }

    get getTitulo(){
        return this._titulo;
    }

    get getEdadMin(){
        return this._edadMin;
    }
}