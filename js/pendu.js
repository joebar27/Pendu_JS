//----------------------DECLARATION DES TABLEAUX DE MOT-----------------------------------

var wordListGlobal = ["stylo", "chien", "chat", "ordinateur", "verre", "chocolat", "bougie", "cahier", "anticonstitutionnellement","Palourde","Creux","Faire","Siècle","Olive","Cou","Comte",
"Bluff","Bronze","Claustrophobie","Amputer","Somnambule","Exercice","Modifier","Benne","Longue","Scientifique","Tournesol","Marginal","Russie","Esquimau","Clavier","Pouls","Joyau",
"Fondue","Pipeline","Pauvres","Dent","Fausser","Analytique","Hormones","Dépression","Jump","Dupliquer","Urgence","Concubines","Bars","Pieds","Vol","JeudiBordeaux","Sourcils","Oreille",
"Ovale","Beffroi","Cintre","Tube","alade","Saveur","Boulangerie","Swing","Voler","Pistolet","Nez","Doublure","Monstre","Ventiler","Baigner","Pratique","Objectifs","Clavier","Diamant",
"Etriers","Falsifier","Cerceau","Cygne","Parieur","Roues","Coma","Coeur","Abdomen","Doigt","Viande","Muscle","Fesses","Bouche","Cou","Corps","Visage","REVOYEZ","CONTENT","AFGHANS","ASSYRIE","RAIMOND",
"BATEAUX","HAUTAIN","MOQUONS","TRAPPES","TOMBEUR","BOUTENT","INFOUTU","NOMMAIT","VITESSE","OCCULUS","LAVIGNE","ULCERES","HUILEUX","EPOPEES","VENTEUX","RIDEAUX","BLAGUER","FRELONS","SLALOMS","COUDERT",
"TRANSFO","SULFATE","REMPLIE","ALCALIN","BARRIER","ASSAGIT","NIRVANA","LARMOIE","TORRIDE","LISSAGE","ATTISEE","ETRIPER","SIDEREE","REMOISE","TONDENT","DELARUE","ACTUELS","ASSURES","FANCHON","SERVIER",
"NASALES","LECOMTE","VEAUTER","BRISEES","SATURER","ALLEGES","DUNNING","HOMELIE","QUINTAL","DIVERSE","REELIRE","CORINNE","SONDIER","RENOUEE","COLLEES","BAISAGE","BIDOCHE","PAPESSE","SURPAYE","UPVOTEE",
"MIXTURE","INFORMA","NASALES","EMETTRE","CANTONS","ROMANDE","MORAINE","DANSEUR","REFERME","FLUVIAL","DENIENT","SPOILEZ","PRETERA","EMETTRA","ERIGNAC","AUDITER","CIRAGES","NOTAIRE","POTIONS","ENROBER",
"PLIABLE","RECALER","TANTALE","ROSETTE","JEUNENT","ECZEMAS","NAVIRES","DEROBES","EXILANT","ANNULEE","ISABEAU","OFFRIRA","RISQUEZ","TUTORES","LAURENS",];

var wordListAnimaux = ["Escargot","Poney","Thon","Gorille","Voler","Méduse","Autruche","Langouste","Chien","Crocodile","Girafe","Oie","Mouflon","Oursin","Tortue","Mouton","Chinchilla","Ours","Faucon","Souris",
  "Serpent","Chameau","Iguane","Oie","Pie","Cerf","Sauterelle","Papillon","Sanglier","Crabe","Mollusque","Colombe","Mule","Hippopotame","Lion","Corbeau","Kangourou","Moustique","Perroquet","Scarabée","Loup","Aigle",
  "Faisan","Vache","Calmar","Singe","Koala","Paresseux","Cygne"];

var wordListEnfant = ["Anneau","Noir","Loup","Dix","Livre","Sol","Pomme","Marguerite","Poussin","Jump","Pantalon","Montagne","Requin","Grand","Films","Vendeur","Fiche","Bouche","Girafe","Moto","Sucette","Loupe",
  "Panda","Ventre","Fleur","Lait","Professeur","Poisson","Marteau","Taxi","Tigre","Chaussettes","Cuisinier","Feuilles","Lit","Sandwich","Herbe","Poire","Couteau","Argent","Nez","Malade","Craie","Trois","Lanterne",
  "Automne","Grain","raisin","Neige","Nappe","Rire","Chat","Casque","Pain","Dauphin","Vert","Jardin","Chapeau","Viande","Quatre","Vache","Lune","Verre","Chocolat","Poulet","DessusCintre","Main","Triangle","Baignoire",
  "Boisson"];

//-----------------------------------------------------------------DECLARATION DES VARIABLE--------------------------------------------------------------------------

var interfaceChoice;
var interfaceCheck;
var askPlayerTheme;
var wordSplited = []; //mot découpé en lettre
const initScore = 7; // initialisation du score en debut de partie
var currentScore; //score indiqué à l'utilisateur toute la partie
var currentWord; //mot choisi par l'ordi
var currentLetter; //lettre choisi par l'utilisateur
var letterFind; //declare si l'utilisateur a trouvé une bonne lettre
var hiddenWord = []; //mot choisi par l'ordi transformé en underscore


//-------------------------------------------------------------------CREATION DES FONCTIONS--------------------------------------------------------------------------

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
  themechoice();
  replaceWord(currentWord);
  return gamePlay();
}

// Fonction pour le choix du theme de mot choisi
function themechoice() {
  askPlayerTheme = prompt(`Voulez vous choisir un thème en particulier ?
    - Vous pouvez choisir des mots Généraux en tapant : 'G'
    - Vous pouvez choisir des mots sur les Animaux en tapant : 'A'
    - Vous pouvez choisir des mots pour les Enfants en tapant : 'E'`);
    askPlayerTheme = askPlayerTheme.toLocaleLowerCase();
  switch (askPlayerTheme){
    case "a" : generateWordAnimaux();
    break;
    case "g" : generateWordGlobal();
    break;
    case "e" : generateWordEnfant();
    break;
    default : themechoice();
    break;
  }
}
// Fonction pour le déroulement du jeu
function gamePlay() {
  while (currentScore !== 0 && hiddenWord.join('') !== currentWord) {//
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

// Fonction pour la génération aléatoire du mot choisi par l'ordinateur parmi le tableau de mot : général
function generateWordGlobal() {
  currentWord = wordListGlobal[Math.floor(Math.random() * wordListGlobal.length)];
  console.log(currentWord);
  currentWord = currentWord.toLocaleLowerCase();
  return currentWord;
}
// Fonction pour la génération aléatoire du mot choisi par l'ordinateur parmi le tableau de mot : animaux
function generateWordAnimaux() {
  currentWord = wordListAnimaux[Math.floor(Math.random() * wordListAnimaux.length)];
  console.log(currentWord);
  currentWord = currentWord.toLocaleLowerCase();
  return currentWord;
}
// Fonction pour la génération aléatoire du mot choisi par l'ordinateur parmi le tableau de mot : enfant
function generateWordEnfant() {
  currentWord = wordListEnfant[Math.floor(Math.random() * wordListEnfant.length)];
  console.log(currentWord);
  currentWord = currentWord.toLocaleLowerCase();
  return currentWord;
}

// Fonction qui remplace les lettres du mot choisi par l'ordinateur par des underscore
function replaceWord() {
  wordSplited = currentWord.split('');
  while (hiddenWord.length !== currentWord.length) {
    hiddenWord.push("_");
  }
  return hiddenWord.join('');
}

// Fonction qui permet au joueur de choisir sa lettre et qui vérifie si il n'en choisi qu'une seul à la fois
function letterCaptured() {
  currentLetter = prompt(`le mot choisit par l'ordinateur est :\n ${hiddenWord.join('  ')}\nIl vous reste encore ${currentScore} coup(s)\nMerci de saisir une lettre`)
  currentLetter = currentLetter.toLocaleLowerCase();
  if (currentLetter.length !== 1) {
    alert("ATTENTION : une seul lettre est requise.")
    letterCaptured();
  }
  return currentLetter;
}

// Fonction qui permet de comparer la lettre au mot pour connaitre si elle existe.
function letterCompared() {
  letterFind = false;
  for (var i = 0; i < wordSplited.length; i++) {
    if (wordSplited[i] === currentLetter) {
      hiddenWord[i] = currentLetter;
      letterFind = true;
    } 
  }
  return letterFind;
}

// Fonction affichant si l'utilisateur a perdu et lui indique le mot qu'il fallait trouver
function gameOver() {
  alert(`Vous avez été\n PENDU\nLe mot attendu etait : ${currentWord}`);
  return menu();
}

// Fonction de décrémentation du score de l'utilisateur
function userScore(){
  if (letterFind === false){
    currentScore -= 1;
  }
  return currentScore;
}

//--------------------------------------------------------------------------LANCEMENT DU JEU-----------------------------------------------------------------------------------------

alert("Bienvenue sur le jeu du pendu");
menu();
