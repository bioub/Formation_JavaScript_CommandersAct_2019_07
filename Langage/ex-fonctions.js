// var prenom = 'Romain';
// var nom = 'Bohdanowicz';
// var nomComplet = prenom + ' ' + nom;
// console.log(nomComplet);

function creerNomComplet(prenom, nom) {

}

// Ajouter un return dans la fonction tel que le code suivant affiche
// Romain Bohdanowicz
console.log(creerNomComplet('Romain', 'Bohdanowicz'));

// var estPair = nom.length % 2 === 0;

function estPair(nb) {

}

// Compléter estPair tel que le code suivant fonctionne
console.log(estPair(4)); // true
console.log(estPair(3)); // false

if (estPair(4)) {
  console.log('Le nombre 4 est pair')
}

var prenoms = ['Romain', 'Eric', 'Jean'];
var indiceAlea = Math.floor(Math.random() * prenoms.length);

var prenomAlea = prenoms[indiceAlea];
console.log('Le prénom aléatoire est : ' + prenomAlea);

// if (prenomAlea.length === 4) {
//   console.log('Le prénom fait 4 lettres');
// }

// Créer une fonction afficheSi4Lettres qui affiche 'Le prénom fait 4 lettres' si le prénom passé en entrée est pair
// afficheSi4Lettres(prenomAlea);

// for (var i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];
//   if (prenom.length === 4) {
//     console.log(prenom);
//   }
// }

var prenomsDe4Lettres = filtreTableauParTaille(prenoms, 4);
console.log(prenomsDe4Lettres); // [Jean, Eric]