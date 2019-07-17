function hello() {
  console.log('Hello !');
}

hello();
hello();
hello();

function bonjour(prenom) {
  console.log('Bonjour ' + prenom + ' !');
}

var prenomEnDehors = 'Eric';

bonjour('Romain'); // dans la fonction -> var prenom = 'Romain';
bonjour(prenomEnDehors); // dans la fonction -> var prenom = prenomEnDehors;
// console.log(prenom); // ReferenceError: prenom is not defined

function entierAleaEntre0et100() {
  return Math.floor(Math.random() * 101);
}

var entierAlea1 = entierAleaEntre0et100();
var entierAlea2 = entierAleaEntre0et100();
var entierAlea3 = entierAleaEntre0et100();
console.log(entierAlea1, entierAlea2, entierAlea3);

function addition(nb1, nb2) {
  return nb1 + nb2;
}

console.log(addition(1, 2)); // 3