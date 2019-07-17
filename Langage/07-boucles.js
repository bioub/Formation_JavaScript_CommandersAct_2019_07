var entierAlea = Math.floor(Math.random() * 100);

// 4 catégories de boucle
// si on peut pas prédire le nombre de passage dans la boucle: while, do .. while
// on peut prédire le nombre de passage : for
// toutes les clés d'un objet for .. in
// tous les éléments d'un Itérable (Array, String, NodeList) : for .. of (ES6, Edge 12+ PAS IE)

// while le test se fait au début
while (entierAlea > 0) {
  console.log(entierAlea);
  entierAlea = Math.floor(entierAlea / 2);
}

// do .. while le test se fait à la fin
// ex: générer en entierAlea pair
do {
  var entierAleaPair = Math.floor(Math.random() * 100);
} while (entierAleaPair % 2 === 1);

console.log('Mon nombre pair : ' + entierAleaPair);

// Sans boucle en beaucoup plus simple
var entierAleaPair = Math.floor(Math.random() * 50) * 2;
console.log('Mon nombre pair : ' + entierAleaPair);

// Afficher 10 fois Hello
for (var i = 0; i < 10; i++) {
  console.log('Hello');
}

/* équivalent à :
var i = 0;
while (i < 10) {
  console.log('Hello');
  i++;
}
*/

// Utile pour afficher toutes les valeurs d'un tableau
var prenoms = ['Romain', 'Eric', 'Jean'];
for (var i = 0; i < prenoms.length; i++) {
  console.log('Hello ' + prenoms[i]);
}

// Même en ES6 (PAS IE, Edge 12+)
for (var prenom of prenoms) {
  console.log('Hello ' + prenom);
}

var prenoms = ['Romain', 'Eric', 'Jean'];
console.log(prenoms[0]); // Romain

// var prenom = 'Romain';
// console.log(prenom[0]); // R
// console.log(prenom.charAt(0)); // R
// for (var lettre of prenom) {
//   console.log(lettre);
// }

var contact = {
  prenom: 'Romain',
  nom: 'Bohdanowicz',
  age: 33, // virgule finale sur les objets et tableau (ES5, IE9+)
};

// Boucle sur les clés d'un objet
for (var key in contact) {
  console.log(key); // prenom puis nom puis age
  console.log(contact[key]); // Romain puis Bohdanowicz puis 33
}