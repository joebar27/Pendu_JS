//----------------------DECLARATION DES VARIABLE-----------------------------------
var interfaceChoice;
var interfaceCheck;
var wordOfDico = ["stylo", "chien", "chat", "ordinateur", "verre", "chocolat", "bougie", "cahier"];
var wordSplited;
const initScore = 7;
var currentScore;
var currentWord;
var longWord;
var wordHide = [];

//------------------------CREATION DES FONCTIONS-----------------------------------

function menu() {
  // capture du choix de l'utilisateur dans le menu de lancement.
  interfaceChoice = prompt("Merci de saisir : \n\"J\" pour jouer \"Q\" pour quitter \"R\" pour obtenir les règles");
  interfaceCheck = interfaceChoice.toLocaleLowerCase();
  // recursivité de l'interface en cas de mauvaise entrer.
  if (interfaceCheck !== "j" && interfaceCheck !== "r" && interfaceCheck !== "q") {
    return menu();
  }
  // lancement du jeu par le choix utilisateur.
  else if (interfaceCheck === "j") {
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
  currentScore = initScore;
  console.log(currentScore);
  wordChoice();
  replaceWord(currentWord);
}

function wordChoice() {
  let randWord = Math.floor(Math.random() * wordOfDico.length);
  currentWord = wordOfDico[randWord];
  return currentWord;
}

function replaceWord() {
  wordSplited = currentWord.split('');
  console.log(wordSplited);
  let longWord = currentWord.length;
  while (wordHide.length !== longWord) {
    wordHide.push("_");
  }
  console.log(wordHide);
  alert(`le mot choisit par l'ordinateur est :\n\n ${wordHide.join('  ')}`)
  return wordHide.join(' ');
}

function wordCompared() {

}

function userScore() {
  if (wordCompared() === false) {
    currentScore -= 1;
  }
}




//-------------------------DEROULEMENT DU JEU---------------------------------------

alert("Bienvenue sur le jeu du pendu");
menu();
