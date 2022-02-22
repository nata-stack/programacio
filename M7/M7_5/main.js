class Punt{
    
    constructor(posicioX, posicioY){
        this._posicioX = posicioX;
        this._posicioY = posicioY;
    }

    get getPosicioX(){
        return this._posicioX;
    }

    get getPosicioY(){
        return this._posicioY;
    }
}

class Cercle{

    constructor(radi, punt){
        this._radi = radi;
        this._centre = punt; //objecte Punt (x, y)
    }

    get getRadi(){
        return this._radi;
    }

    get getCentre(){
        return this._centre;
    }

   
    distanciaCentres(altreCercle){ //Retorna la distància entre el centre del cercle actual i el rebut com a paràmetre.
        let x1 = this._centre.getPosicioX;
        let y1 = this._centre.getPosicioY;
        let x2 = altreCercle.getCentre.getPosicioX;
        let y2 = altreCercle.getCentre.getPosicioY;

        let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 
        return d;
    }

    equals(altreCercle){  //Retorna true si dos cercles són iguals (si tenen el mateix centre i el mateix radi)
        let x1 = this._centre.getPosicioX;
        let y1 = this._centre.getPosicioY;
        let x2 = altreCercle.getCentre.getPosicioX;
        let y2 = altreCercle.getCentre.getPosicioY;
        let r1 = this._radi;
        let r2 = altreCercle.getRadi;  
        if (x1 == x2 && y1 == y2 && r1 == r2){
            return true;
        } else {
            return false
        }
    }

    sonConcentrics(altreCercle){
        let x1 = this._centre.getPosicioX;
        let y1 = this._centre.getPosicioY;
        let x2 = altreCercle.getCentre.getPosicioX;
        let y2 = altreCercle.getCentre.getPosicioY;
        if (x1 == x2 && y1 == y2){
            return true;
        } else {
            return false
        }
    }

    tenenIgualRadi(altreCercle){
        let r1 = this._radi;
        let r2 = altreCercle.getRadi;  
        if (r1 == r2){
            return true;
        } else {
            return false
        }
    }

    sonTangents(altreCercle){
        let r1 = this._radi;
        let r2 = altreCercle.getRadi;  
        let d = this.distanciaCentres(altreCercle);
        if(d == r1 + r2 || d == Math.abs(r1 - r2)){
            return true;
        } else {
            return false
        }
    }

    sonSecants(altreCercle){
        let r1 = this._radi;
        let r2 = altreCercle.getRadi;  
        let d = this.distanciaCentres(altreCercle);
        if(d < r1 + r2 && Math.abs(r1 - r2)){
            return true;
        } else {
            return false
        }
    }

    noEsToquen(altreCercle){
        let r1 = this._radi;
        let r2 = altreCercle.getRadi;  
        let d = this.distanciaCentres(altreCercle);
        if((d > r1 + r2) || (d > 0 && d < Math.abs(r1 - r2)) || (d == 0 && r1 != r2)){
            return true;
        } else {
            return false
        }
    }
}

let arrayCercles = [];

function dadesCercle(){
    let x1 = parseInt(document.getElementById("x1").value);
    let y1 = parseInt(document.getElementById("y1").value);
    let r1 = parseInt(document.getElementById("r1").value);

    let x2 = parseInt(document.getElementById("x2").value);
    let y2 = parseInt(document.getElementById("y2").value);
    let r2 = parseInt(document.getElementById("r2").value);

    let punt1 = new Punt(x1, y1);
    let cercle1 = new Cercle(r1, punt1);
    arrayCercles.push(cercle1);

    let punt2 = new Punt(x2, y2);
    let cercle2 = new Cercle(r2, punt2);
    arrayCercles.push(cercle2);
    
    console.log(arrayCercles); 
}

function opcio(x){
    switch (x) {
        case 1:
            alert("Distancia entre els dos centres: " + arrayCercles[0].distanciaCentres(arrayCercles[1]));
            break;
        case 2:
            alert("Els dos cercles són idèntics? " + arrayCercles[0].equals(arrayCercles[1]));
            break;
        case 3:
            alert("Els dos cercles són concèntrics? " + arrayCercles[0].sonConcentrics(arrayCercles[1]));
            break;
        case 4:
            alert("Els dos cercles tenen igual radi? " + arrayCercles[0].tenenIgualRadi(arrayCercles[1]));
            break;
        case 5:
            alert("Els dos cercles són tangents? " + arrayCercles[0].sonTangents(arrayCercles[1]));
            break;
        case 6:
            alert("Els dos cercles són secants? " + arrayCercles[0].sonSecants(arrayCercles[1]));
            break;
        case 7:
            alert("Els dos cercles no es toquen: " + arrayCercles[0].noEsToquen(arrayCercles[1]));
            break;
    
        default:
            break;
    }
}