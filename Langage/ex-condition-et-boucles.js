var prenoms = ['Romain', 'Eric', 'Jean'];
var indiceAlea = Math.floor(Math.random() * prenoms.length);

var prenomAlea = prenoms[indiceAlea];
console.log('Le prénom aléatoire est : ' + prenomAlea);

console.log(prenoms.join(' - '));
// Afficher 'Le prénom fait 4 lettres' si le prénom fait 4 lettres
// prenom.length
if (prenomAlea.length === 4) {
  console.log('Le prénom fait 4 lettres');
}

// Si dans l'ordre Alphabétique le prenomAlea est avant Pierre
// Afficher 'avant Pierre' sinon 'après Pierre'
// rappel : 'Romain' < 'Eric' false (car 'Romain' est après 'Eric' dans l'ordre alphabétique)
if (prenomAlea < 'Pierre') {
  console.log(prenomAlea + ' avant Pierre dans l\'ordre alphabétique');
} else {
  console.log(prenomAlea + ' après Pierre dans l\'ordre alphabétique');
}

// Afficher tous les prénoms du tableau en partant de la fin
// (l'indice du dernier élément du tableau : prenoms.length - 1)
for (var i = prenoms.length - 1; i >= 0; i--) {
  var prenom = prenoms[i];
  console.log(prenom);
}

// Afficher tous les prénoms du tableau qui font 4 lettres
for (var i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    console.log(prenom);
  }
}

// (optionnel)
// Créer un tableau avec 100 nombres compris entre 0 et 2 (inclus)
// var nbs = [];
// Pour ajouter une valeur au tableau (dans l'exemple ajoute 2)
// nbs.push(2)
var nbs = [];
for (var i = 0; i < 100; i++) {
  nbs.push(Math.floor(Math.random() * 3));
}
console.log(nbs.join(', '))

// Plus court
var nbs = Array(100).fill(0).map(() => Math.floor(Math.random() * 3))
console.log(nbs.join(', '));

// (optionnel) Afficher le prénom le plus long du tableau (prenoms)
var prenomLePlusLong = '';
for (var i = 0; i < prenoms.length; i++) {
  if (prenomLePlusLong.length < prenoms[i].length) {
    prenomLePlusLong = prenoms[i];
  }
}
console.log('Prénom le plus long : ' + prenomLePlusLong);

var prenomLePlusLong = prenoms.reduce((pMax, prenom) => pMax.length < prenom.length ? prenom : pMax, '');
console.log(prenomLePlusLong);

// (optionnel) Afficher le nombre de 0, de 1 et de 2 du tableau
var nbZeros = 0;
var nbUns = 0;
var nbDeux = 0;

for (var i = 0; i < nbs.length; i++) {
  switch (nbs[i]) {
    case 0:
      nbZeros++;
      break;
    case 1:
      nbUns++;
      break;
    case 2:
      nbDeux++;
      break;
  }
}

console.log(nbZeros);
console.log(nbUns);
console.log(nbDeux);

// En plus court
var counters = [];
for (var i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  counters[nb] = counters[nb] !== undefined ? counters[nb] + 1 : 1;
}
console.log(counters);