var prenoms = ['Romain', 'Eric', 'Jean'];
var indiceAlea = Math.floor(Math.random() * prenoms.length);

var prenomAlea = prenoms[indiceAlea];
console.log('Le prénom aléatoire est : ' + prenomAlea);

// Afficher 'Le prénom fait 4 lettres' si le prénom fait 4 lettres

// Si dans l'ordre Alphabétique le prenomAlea est avant Pierre
// Afficher 'avant Pierre' sinon 'après Pierre'
// rappel : 'Romain' < 'Eric' false (car 'Romain' est après 'Eric' dans l'ordre alphabétique)

// Afficher tous les prénoms du tableau en partant de la fin

// Afficher tous les prénoms du tableau qui font 4 lettres

// (optionnel)
// Créer un tableau avec 100 nombres compris entre 0 et 2 (inclus)
// var nbs = [];
// Pour ajouter une valeur au tableau (dans l'exemple ajoute 2)
// nbs.push(2)

// (optionnel)
// Afficher le prénom le plus long du tableau

// (optionnel)
// Afficher le nombre de 0, de 1 et de 2 du tableau