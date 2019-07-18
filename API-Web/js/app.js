window.addEventListener('load', function() {
  // Le DOM est pret + les images ont chargées
});

document.addEventListener('DOMContentLoaded', function() {
  // Le DOM est pret
  var btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    btn.innerText++;
  });

  // TODOLIST
  /** @type HTMLFormElement */
  var form = document.querySelector('.todoform');

  /** @type HTMLInputElement */
  var input = document.querySelector('.todoform > input');

  /** @type HTMLDivElement */
  var div = document.querySelector('.todolist');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // input.focus();
    // input.setSelectionRange(0, 1);
    
    var ligne = document.createElement('div');
    ligne.innerText = input.value;

    var btnMoins = document.createElement('button');
    btnMoins.innerText = '-';
    ligne.appendChild(btnMoins);

    // Exercice
    // Ecouter le clic du bouton
    // Au clic du bouton supprimer la balise ligne de la div
    // MDN : https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
    // https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove
    

    div.appendChild(ligne);
  });
  
});