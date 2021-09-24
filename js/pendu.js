//----------------------DECLARATION DES VARIABLE-----------------------------------
var interfaceChoice;
var interfaceCheck;
var wordList = ["stylo", "chien", "chat", "ordinateur", "verre", "chocolat", "bougie", "cahier", "anticonstitutionnellement"];
var wordSplited = []; //mot découpé en lettre
const initScore = 7;
var currentScore;
var currentWord; //mot choisi par l'ordi
var currentLetter; //lettre choisi par l'utilisateur
var letterFind;
var hiddenWord = []; //mot choisi par l'ordi transformé en underscore


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
  hiddenWord = [];
  console.log("initial score : " + currentScore);//------------------------------------------------------------------------------------------------------------------------------------------------------------------
  wordGenerate();
  replaceWord(currentWord);
  return gamePlay();
}

// Fonction pour le déroulement du jeu
function gamePlay() {
  console.log("score actuelle : " + currentScore);//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
  while (currentScore !== 0 && hiddenWord.join('') !== currentWord) {
    //console.log(hiddenWord.join(''));//------------------------------------------------------------------------------------------------------------------------------------------------------------------
    letterCaptured();
    letterCompared();
    userScore();
  }
  if (currentScore === 0) {
    gameOver();
  }
  else{
    alert("vous avez trouver le mot");
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
  //console.log(wordSplited);//------------------------------------------------------------------------------------------------------------------------------------------------------------------
  while (hiddenWord.length !== currentWord.length) {
    hiddenWord.push("_");
  }
  //console.log(hiddenWord);//------------------------------------------------------------------------------------------------------------------------------------------------------------------
  return hiddenWord.join('');
}

// Fonction qui permet au joueur de choisir sa lettre et qui vérifie si il n'en choisi qu'une seul a la fois
function letterCaptured() {
  currentLetter = prompt(`le mot choisit par l'ordinateur est :\n ${hiddenWord.join('  ')}\nIl vous reste encore ${currentScore} coup(s)\nMerci de saisir une lettre`)
  if (currentLetter.length !== 1) {
    alert("ATTENTION : une seul lettre est requise.")
    letterCaptured();
  }
  return currentLetter;
}

// Fonction qui permet de comparer la lettre au mot pour connaitre si elle existe.
function letterCompared() {
  for (var i = 0; i < wordSplited.length; i++) {
    if (wordSplited[i] === currentLetter) {
      hiddenWord[i] = currentLetter;
      letterFind = true;
    } 
  }
  return letterFind;
}

function gameOver() {
  alert(`Vous avez été\n PENDU\nLe mot attendu etait : ${currentWord}`);
  return menu();
}

function userScore(){
  if (letterFind === true){
    console.log("super");//------------------------------------------------------------------------------------------------------------------------------------------------------------------
  }
  else {
    letterFind = false;
    currentScore -= 1;
  }
  return currentScore;
}


//-------------------------DEROULEMENT DU JEU---------------------------------------

alert("Bienvenue sur le jeu du pendu");
menu();
