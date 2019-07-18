// var prenom = 'Romain';
// var nom = 'Bohdanowicz';
// var nomComplet = prenom + ' ' + nom;
// console.log(nomComplet);

function creerNomComplet(prenom, nom) {
  return prenom + ' ' + nom;
}

// Ajouter un return dans la fonction tel que le code suivant affiche
// Romain Bohdanowicz
console.log(creerNomComplet('Romain', 'Bohdanowicz'));

// var estPair = nom.length % 2 === 0;

function estPair(nb) {
  return nb % 2 === 0;
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
function afficheSi4Lettres(prenom) {
  if (prenom.length === 4) {
    console.log('Le prénom fait 4 lettres');
  }
}

afficheSi4Lettres(prenomAlea);

// for (var i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];
//   if (prenom.length === 4) {
//     console.log(prenom);
//   }
// }

function filtreTableauParTaille(tableau, taille) {
  var resultat = [];

  for (var i = 0; i < tableau.length; i++) {
    const elt = tableau[i];
    if (elt.length === taille) {
      resultat.push(elt);
    }
  }

  return resultat;
}

var prenomsDe4Lettres = filtreTableauParTaille(prenoms, 4);
console.log(prenomsDe4Lettres); // [Jean, Eric]