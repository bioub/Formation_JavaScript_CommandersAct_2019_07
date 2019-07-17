var entierAlea = Math.floor(Math.random() * 100);

console.log('Le nombre entier aléatoire est : ' + entierAlea);

if (entierAlea >= 10) {
  console.log('C\'est un nombre à 2 chiffres');
}

if (entierAlea % 2 === 0) {
  console.log('C\'est un nombre pair');
} else {
  console.log('C\'est un nombre impair');
}

/*
if (entierAlea < 25) {
  console.log('Il est compris entre 0 et 25');
} else {
  if (entierAlea < 50) {
    console.log('Il est compris entre 25 et 50');
  } else {
    if (entierAlea < 75) {
      console.log('Il est compris entre 50 et 75');
    } else {
      console.log('Il est compris entre 75 et 100');
    }
  }
}
*/

if (entierAlea < 25) {
  console.log('Il est compris entre 0 et 25');
} else if (entierAlea < 50) {
  console.log('Il est compris entre 25 et 50');
} else if (entierAlea < 75) {
  console.log('Il est compris entre 50 et 75');
} else {
  console.log('Il est compris entre 75 et 100');
}

/*
if (entierAlea === 0) {
  console.log('Le nombre est zéro');
} else if (entierAlea === 1) {
  console.log('Le nombre est un');
}  else if (entierAlea === 2) {
  console.log('Le nombre est deux');
}
*/

switch (entierAlea) {
  case 0:
    console.log('Le nombre est zéro');
    break;
  case 1:
    console.log('Le nombre est un');
    break;
  case 2:
    console.log('Le nombre est deux');
    break;
}

var entierEntre0et3 = Math.floor(Math.random() * 3);

var nbs = ['zéro', 'un', 'deux'];
console.log('Le nombre est ' + nbs[entierEntre0et3]);

var mappingTranslate = {
  'zéro': 'zero',
  'un': 'one',
  'deux': 'two',
};

console.log('Le nombre un s\'écrit en anglais : ' + mappingTranslate['un']);