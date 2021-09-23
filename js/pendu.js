//----------------------DECLARATION DES VARIABLE-----------------------------------
var interfaceChoice;
var interfaceCheck;

//------------------------CREATION DES FONCTIONS-----------------------------------
alert("Bienvenue sur le jeu du pendu");
menu();

function menu() {
  // capture du choix de l'utilisateur dans le menu de lancement.
  interfaceChoice = prompt("Merci de saisir : \n\"J\" pour jouer \"Q\" pour quitter \"R\" pour obtenir les règles");
  interfaceCheck = interfaceChoice.toLocaleLowerCase();
  console.log(interfaceChoice);
  // recursivité de l'interface en cas de mauvaise entrer.
  if (interfaceCheck !== "j" && interfaceCheck !== "r" && interfaceCheck !== "q") {
    return menu();
  }
  // lancement du jeu par le choix utilisateur.
  if (interfaceCheck === "j") {
    return gameStart();
  }
  // affiche les regles du jeu par le choix utilisateur.
  else if (interfaceCheck === "r") {
    alert("Voici les règles:\nEntrer une lettre unique que vous pensé etre correct au mot choisit par l'ordinateur\nVous avez 7 tentative avant d'etre pendu\nBon jeu.");
    return menu();
  }
  // affiche une confirmation de l'arret du jeu.
  else if (interfaceCheck === "q") {
    return alert("Merci d'avoir joué\nA bientot.");
  }
}

function gameStart() {
    

}
