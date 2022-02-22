let pers1 = new Persona ("Marta", 30, "Amable");

////////////////////////////
//Testeig de la encapsulacio
////////////////////////////
console.log("////////////////ENCAPSULACIO");

//////sense encapsular
console.log(pers1._nom);
pers1._nom = "Nom hackejat";
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


////////////////////////////////
//Utilitzan l'herencia
////////////////////////////////
console.log("////////////////HERENCIA");
let pers2 =  new Nado("Dani", 1, "Nervios", false);

console.log(pers2._nom);
console.log(pers2.edat);

pers2.dents = true;                 //accedim a una propietat només de nadons
console.log("te ara dents? " +pers2.dents);

console.log(pers2.plorar());                     //accedim a un metode nomes de nado

pers2.parlar("Soc un altre objecte de JS");        //accedim a mètodes del pare
pers2.caminar();
pers2.creixer(10);

