// type primitifs (une valeur à la fois)
var prenom = 'Romain'; // type string (chaine de caractères / texte)
var age = 33; // type number
var estMajeur = true; // true ou false (vrai ou false / test)

// type objet
var prenoms = ['Romain', 'Eric', 'Jean']; // Objet Array
console.log(prenoms[0]); // Romain
console.log(prenoms.length); // 3

var contact = {
  prenom: 'Romain',
  nom: 'Bohdanowicz',
  age: 33, // virgule finale sur les objets et tableau (ES5, IE9+)
}; // Objet Objet
console.log(contact.prenom); // Romain