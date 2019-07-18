// opérateur d'affectation (assignment) =
// écrire dans une variable
// existe sur tous les types
// lit de droite à gauche
var prenom = 'Romain';

// Uniquement sur les nombres
// Opérateurs arithmétiques
console.log(1 + 1); // addition
console.log(2 * 3); // multiplication
console.log(3 / 2); // division
console.log(3 - 2); // soustraction
console.log(3 % 2); // modulo (reste de la division entière)
// 3 = 2 * 1 + 1  (module c'est le + 1)
/*
Comme dans les divisions en primaire
 7 | 2
 --+------
 1 | 3
mod|
*/

// Uniquement sur les chaines de caractères
// Concaténation (regrouper plusieurs chaines en une)
console.log('Bonjour' + ' ' + 'Romain'); 
console.log('Bonjour ' + prenom); 

// ATTENTION PIEGE JS
// + donne priorité à la concaténation
console.log('1' + 1); // 11
console.log(1 + '1'); // 11
console.log('1 + 1 = ' + 1 + 1); // 1 + 1 = 11

// changer les priorités avec ()
console.log('1 + 1 = ' + (1 + 1)); // 1 + 1 = 2

// Opérateur de comparaisons (résultat booléan)
console.log(0 < 10); // true (inférieur)
console.log(0 <= 10); // true (inférieur ou égal)
console.log(0 > 10); // false (supérieur)
console.log(0 >= 10); // false (supérieur ou égal)
console.log(0 == 10); // false (égaux)
console.log(0 != 10); // true (différent)

console.log(prenom == 'Romain'); // true (égaux)
console.log(prenom != 'Romain'); // false (différent)
console.log('Jean' < 'Romain'); // true (tri alphabétique (inférieur dans l'ordre alphabétique))

// Opérateur qui teste l'égalité ET le type
console.log(12 === '12'); // false
console.log(12 == '12'); // true (vrai après conversion)
console.log(12 !== '12'); // true
console.log(12 != '12'); // false (false après conversion)

/*
// ATTENTION PIEGE JS
// quand on compare une valeur et le contenu d'une variable
// on peut vite se tromper entre =, == et ===
// bonne pratique : commencer par la valeur
// en cas d'oubli d'un =, erreur de syntaxe
// sinon le code fonctionne et est difficile à déboguer

if ('Romain' = prenom) {

}
*/

// Opérateur logiques (sur les booléens)
// En JS on ne peut pas écrire
var nb = 1000;
console.log(0 < nb < 100); // si on décompose (0 < 10) === true, et ensuite (true < 100) === true

// Si vous voulez true si tous les tests sont true => ET LOGIQUE &&
console.log(0 < nb && nb < 100); // false (ça aurait été true si (0 < 10) ET AUSSI si (10 < 100))

// Si vous voulez true si au moins un des tests est true => OU LOGIQUE ||
console.log(0 > nb || nb > 100); // true (ça aurait été false si (0 < 10) OU si (10 < 100))

var estPair = nb % 2 === 0;
console.log(!estPair); // false (inverse le booleen)
// ex : 
// if (!estPair) { console.log('Le nombre est impair'); }

// Opérateur combinés (+= -= /= *= %=)
nb = nb + 1; // nb contient 1001 après cette instruction
// équivalent à :
nb += 1;  // nb contient 1002 après cette instruction

// Opérateur d'incrémentation et décrémention
nb++; // nb contient 1003 après cette instruction (équivalent à nb = nb + 1)
nb--; // nb contient 1002 après cette instruction