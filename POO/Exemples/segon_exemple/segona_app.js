let pers1 = new Persona ("Marta", 30, "Amable");

////////////////////////////
//Testeig de la encapsulacio
////////////////////////////
console.log("////////////////ENCAPSULACIO");

//////sense encapsular
console.log(pers1._nom);
pers1._nom = "Nom hackejat";   // això no es deuria poder fer
console.log(pers1._nom);

/////com si estigues encapsulat
console.log(pers1.edat);
pers1.edat=35;
console.log(pers1.edat);


/////////////////////////////
//Utilitzant metodes de la classe
////////////////////////////
console.log("////////////////US DE METODES");
pers1.parlar("Soc un objecte de JS");
pers1.caminar();
pers1.creixer(10);