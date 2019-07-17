// A chaque fois afficher le résultat avec console.log();

// Créer une 3 variable nomComplet qui contient 'Romain Bohdanowicz' créé à
// partir des 2 autres
var prenom = 'Romain';
var nom = 'Bohdanowicz';

var nomComplet = prenom + ' ' + nom;
console.log(nomComplet);

// ES6 (PAS IE (Edge 12+))
// var nomComplet = `${prenom} ${nom}`;
// Babel le convertirait en var nomComplet = prenom + ' ' + nom;

// Inverser le contenu de ces 2 variables (nb1 === 100 et nb2 === 0)
// (il faudra créer une 3e variable)
var nb1 = 0;
var nb2 = 100;

var tmp = nb2;
nb2 = nb1;
nb1 = tmp;
console.log(nb1); // 100
console.log(nb2); // 0

// ES6 (PAS IE (Edge 12+))
// [nb1, nb2] = [nb2, nb1];

// Créer une variable estPositif qui contient le résultat du test
// si nb2 est supérieur à 0
var estPositif = nb2 > 0;

// Créer une variable estPair si le nombre de lettres du nom est pair
// pour connaitre le nombre de lettres dans nom : nom.length
var estPair = nom.length % 2 === 0;

// Créer une variable lienSite qui contient
// <a href="https://www.google.fr/">Google</a>
// et créée à partir des variables nomSite et urlSite
var nomSite = 'Google';
var urlSite = 'https://www.google.fr/';

var lienSite = '<a href="'+urlSite+'">'+nomSite+'</a>';

// var lienSite = `<a href="${urlSite}">${nomSite}</a>`;