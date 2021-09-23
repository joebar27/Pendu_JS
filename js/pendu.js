//----------------------DECLARATION DES VARIABLE-----------------------------------
var interface;


//------------------------CREATION DES FONCTIONS-----------------------------------
alert("Bienvenue sur le jeu du pendu");

interface = prompt("Merci de saisir : \n\"J\" pour jouer \"Q\" pour quitter \"R\" pour obtenir les règles");
//interface.toLocaleLowerCase = interfaceCheck;

if (interface.toLocaleLowerCase !== "j" && interface.toLocaleLowerCase !== "r" && interface.toLocaleLowerCase !== "q"){
    console.log(interfaceCheck);
    return interfaceCheck; 
}
if (interfaceCheck === "j"){
    return console.log(interfaceCheck);
}
else if (interfaceCheck === "r"){
    return alert("Voici les règles:\nEntrer une lettre unique que vous pensé etre correct au mot choisit par l'ordinateur\nVous avez 7 tentative avant d'etre pendu\nBon jeu.");
}
else if (interfaceCheck === "q"){
    return alert("Merci d'avoir joué\nA bientot.");
}
