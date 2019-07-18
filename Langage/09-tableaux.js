// Un tableau permet de regrouper plusieurs valeurs, classé par position

// Pour déclarer un tableau
var prenoms = ['Romain', 'Eric'];
var tabVide = [];

// Pour accéder à un élément du tableau
console.log(prenoms[0]); // le premier (à l'élément l'indice 0)
console.log(prenoms[1]); // le 2e (à l'élément l'indice 1)
console.log(prenoms[prenoms.length - 1]); // le dernier

// Si pas de valeur à un indice on récupère undefined
console.log(tabVide[0]); // undefined
console.log(prenoms[19]); // undefined

// Pour ajouter à la fin d'un tableau
prenoms.push('Jean');

// Pour ajouter au début d'un tableau
prenoms.unshift('Thierry');

// Voir les autres fonction MDN Array

// Pour boucler
console.log('for')
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  console.log(prenom);
}

console.log('for .. of')
for (const prenom of prenoms) {
  console.log(prenom);
}

console.log('.forEach');
// Un callback : une fonction qu'on déclare mais qui est appelée indirectement
// ici forEach va appeler log
// au clic d'un bouton on veut que le navigateur appelle une fonction
function log(prenom, i) {
  console.log(prenom, i);
}
prenoms.forEach(log)

function hasFourLetters(value) {
  return value.length === 4;
}

prenoms.filter(hasFourLetters).forEach(log);


prenoms.forEach(function (prenom, i) {
  console.log(prenom, i);
});

// ES6, style plus court (Edge 12+)
prenoms.filter((v) => v.length === 4).forEach((v) => console.log(v))