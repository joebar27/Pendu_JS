//----------------------DECLARATION DES VARIABLE-----------------------------------
var interfaceChoice;
var interfaceCheck;
var wordList = ["stylo", "chien", "chat", "ordinateur", "verre", "chocolat", "bougie", "cahier","anticonstitutionnellement"];
var wordSplited;
const initScore = 7;
var currentScore;
var currentWord;
var currentLetter;
var letterValide;
var hiddenWord = [];


//------------------------CREATION DES FONCTIONS-----------------------------------

// Fonction qui crée le menu de debut et fin de jeu
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
    alert("Merci d'avoir joué\nA bientot.");
    return;
  }
}

// Fonction d'initialisation du jeu 
function gameStart() {
  currentScore = initScore;
  console.log(currentScore);
  wordGenerate();
  replaceWord(currentWord);
  return gamePlay();
}

// Fonction pour le déroulement du jeu
function gamePlay(){
  while(currentScore !== 0 /*&& wordFind() !== true*/){
  letterCaptured();
  wordCompared();
  }
  if(currentScore === 0){
  gameOver();
  }
  return menu();
}

// Fonction pour la génération aléatoire du mot choisi par l'ordinateur parmi un tableau de mots
function wordGenerate() {
  currentWord = wordList[Math.floor(Math.random() * wordList.length)];
  return currentWord;
}

// Fonction qui remplace les lettres du mot choisi par l'ordinateur par des underscore
function replaceWord() {
  wordSplited = currentWord.split('');
  console.log(wordSplited);
  while (hiddenWord.length !== currentWord.length) {
    hiddenWord.push("_");
  }
  console.log(hiddenWord);
  //alert(`le mot choisit par l'ordinateur est :\n\n ${hiddenWord.join('  ')}`)
  return hiddenWord.join(' ');
}

// Fonction qui permet au joueur de choisir sa lettre et qui vérifie si il n'en choisi qu'une seul a la fois
function letterCaptured(){
    currentLetter = prompt(`le mot choisit par l'ordinateur est :\n ${hiddenWord.join('  ')}\nIl vous reste encore ${currentScore} coup(s)\nMerci de saisir une lettre`)
    if(currentLetter.length !== 1){
      alert("ATTENTION : une seul lettre est requise.")
      letterCaptured();
    }
    //console.log(currentLetter);
    return currentLetter;
}

// Fonction qui permet de comparer la lettre au mot pour connaitre si elle existe.
function wordCompared() {
  console.log(currentWord + " compared");
  if (currentWord.search(currentLetter) === -1){
    currentScore -= 1;
    alert(`La lettre ${currentLetter} n'est pas contenue dans le mot`)
    return currentScore;
  }
  else {
    console.log(currentWord[currentWord.search(currentLetter)]);
    console.log(currentWord.search(currentLetter));
    letterValide = currentWord[currentWord.search(currentLetter)];
    console.log(letterValide);
    return letterValide;
  }
}

function gameOver() {
    alert("Vous avez été\n PENDU");
  return menu();
}




//-------------------------DEROULEMENT DU JEU---------------------------------------

alert("Bienvenue sur le jeu du pendu");
menu();
