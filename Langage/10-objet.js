var coords = {
  x: 10, // propriété (valeur de l'objet)
  y: 20,
  doubleX: function() { // méthode (fonction de l'objet)
    return this.x * 2;
  }
};

console.log(coords.x); // 10
console.log(coords['x']); // 10
console.log(coords.doubleX()); // 20

function Coords(x, y) {
  this.x = x;
  this.y = y;
}

Coords.prototype.doubleX = function() {
  return this.x * 2;
};












// On utilise un Type Objet (fonction constructeur)
var coords = new Coords(10, 20);
console.log(coords.x); // 10
console.log(coords['x']); // 10
console.log(coords.doubleX()); // 20

