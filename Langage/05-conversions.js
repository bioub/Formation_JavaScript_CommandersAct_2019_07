var nb1 = '1';
var nb2 = '2';
console.log(nb1 + nb2); // 12
console.log(Number(nb1) + Number(nb2)); // 3

// Number(maVar) converti maVar en Number
// idem pour Boolean et String
console.log(String(123)); 
console.log(Boolean(123)); // true (nb en boolean, false si 0, true sinon)
console.log(Boolean('123')); // true (string en boolean, false si '', true sinon)

// Conversion String -> Number 2 cas particulier
var pi = '3.14';
console.log(parseFloat(pi)); // 3.14
console.log(parseInt(pi)); // 3

var jeu = '123 soleil';
console.log(parseInt(jeu)); // 123
console.log(Number(jeu)); // NaN (opération impossible sur un nombre)

// Autre exemple de NaN
console.log(Math.sqrt(-1)); // NaN

// La conversion peut être implicite (automatique)
console.log(1 + '1'); // converti 1 en '1' avant de concaténer
console.log(1 * '2'); // converti '2' en 2 avant de multiplier
console.log(!'123'); // converti '123' en false

// ASTUCES en JS
// convertir en Boolean
console.log(Boolean('123'));
console.log(!!'123');

// convertir en Number
console.log(Number('123'));
console.log(+'123');

// convertir en String
console.log(String(123));
console.log(123+'');
