function miFuncion(){
    
    //////////////////
    ////////////INPUTS

    ////////////  1 - Recoger valor a traves de un prompt
    //let mensaje = window.prompt("Recollint un valor");   
    
    ////////////  2 - Recoger valor de un input text
    let mensaje = document.getElementById("cajaTexto").value;
    
    
    
    
    /////////////////////
    ///////////// OUTPUTS 

    ////////////  1 - escribir valor en la consola
    //console.log(mensaje); 


    ////////////  2 - Dar valor por ejemplo a un párrafo
    document.getElementById("mostrarDatos").innerHTML = mensaje;
    
    ///////////  3 - Lanzar pop-up
    //window.alert(mensaje);  //podemos prescindir de la palabra "window"



    /////////////////////////////////////////////////////////////////
    //Otra manera de seleccionar el objeto mostrarDatos
    //document.querySelector('#mostrarDatos').innerHTML = "HOLAHOLA";

    //Otra manera de insertar texto
    //document.querySelector('#mostrarDatos').textContent = "HOLAHOLA";

}
