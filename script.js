/*
console.log("hello world");
let age = 42 

const foo = 28
foo = 20;

console.log(age);


//ceci est un com

let a = "hello"; //false
let b = typeof a; //string
let c = typeof typeof 1; //string
let d = a === c; //false "===" = strictement égal

let isRainy = true; //true
let isSunny = !isRainy; //false !isRainy = not
let isWeather = isRainy || isSunny; //true || = or
let isRainbow = isRainy && isSunny; //false && = and

function nomdelafonction (x,x,x {
};

*/
let fabriquant = {
  name: "bic",
};

let stylobleu = {
  couleur: "bleu",
  taille: 12,
  matiere: "plastique",
  effacable: true,
  fabriquant: fabriquant,
};

let stylo = {
  couleur: "vert",
  taille: 12,
  matiere: "plastique",
  effacable: true,
  fabriquant: fabriquant,
};

console.log(
  stylo.couleur,
  stylo.taille,
  stylo.matiere,
  stylo.effacable,
  stylo.fabriquant.name
);

let tableau = [1, 2, 3, 4, "hello"];
console.log(tableau[4][3]);
console.log(tableau.length);
console.log(tableau);

console.log("test");

