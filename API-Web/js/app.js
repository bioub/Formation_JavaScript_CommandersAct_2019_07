(function() {
  // New ES5+ (IE10+)
  'use strict';
  
  var test = 'test';
}());

// Un Module IIFE
// Immediately Invoked Function Express
(function () {
  'use strict';

  // Requête AJAX, requête en JS depuis le navigateur
  // Asynchronous JavaScript And XML
  function fetchTodos(parent) {
    // API Historique XMLHttpRequest
    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener('load', function() {
    //   var todos = JSON.parse(xhr.responseText);
    //   todos.slice(0, 10).forEach(function(todo) {
    //     addTodo(todo.title, parent);
    //   });
    // });
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    // xhr.send();

    // API Moderne Fetch
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(function(res) {
        return res.json();
      })
      .then(function(todos) {
        todos.slice(0, 10).forEach(function(todo) {
          addTodo(todo.title, parent);
        });
      });
  }

  function addTodo(value, parent) {
    var ligne = document.createElement('div');
    ligne.innerText = value;
  
    var btnMoins = document.createElement('button');
    btnMoins.innerText = '-';
    ligne.appendChild(btnMoins);
  
    // Exercice
    // Ecouter le clic du bouton
    // Au clic du bouton supprimer la balise ligne de la div
    // MDN : https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
    // https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove
    btnMoins.addEventListener('click', function () {
      parent.removeChild(ligne);
    });
  
    parent.appendChild(ligne);
  }
  
  window.addEventListener('load', function () {
    // Le DOM est pret + les images ont chargées
  });
  
  document.addEventListener('DOMContentLoaded', function () {

    

    // Le DOM est pret
    var btn = document.querySelector('button');
    btn.addEventListener('click', function () {
      btn.innerText++;
    });
  
    // TODOLIST
    /** @type HTMLFormElement */
    var form = document.querySelector('.todoform');
  
    /** @type HTMLInputElement */
    var input = document.querySelector('.todoform > input');
  
    /** @type HTMLDivElement */
    var div = document.querySelector('.todolist');

    fetchTodos(div);
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      addTodo(input.value, div);
    });

    input.addEventListener('input', function() {
      localStorage.setItem('todoValue', input.value);
    });
  
    // Local/Session Storage
    var valueFromStorage = localStorage.getItem('todoValue');
    input.value = valueFromStorage;

    // var localStorage = {
    //   trackingId: 'X3NK4H52K4BXIHD32HBIX2HBI3'
    // }

  });
}());

