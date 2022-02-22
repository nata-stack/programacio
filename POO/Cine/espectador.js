class Espectador{
    constructor(nombre, edad, dinero){
        this._nombre = nombre;
        this._edad = edad;
        this._dinero = dinero;                   
    }

    get getNombre(){
        return this._nombre;
    }

    get getEdad(){
        return this._edad;
    }

    get getDinero(){
        return this._dinero;
    }
}