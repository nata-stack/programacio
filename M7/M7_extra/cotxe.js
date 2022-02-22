class Cotxe{
    
    constructor(potencia, vel_max, color, preu_mercat){
        this._potencia = potencia;
        this._vel_max = vel_max;
        this._color = color;
        this._preu_mercat = preu_mercat;
    }

    mostrarDades(){
        let resposta = `Potencia: ${this._potencia}. Velocitat màxima: ${this._vel_max}. Color: ${this._color}. Preu de mercat: ${this._preu_mercat} €.`;
        return resposta;
    }
}