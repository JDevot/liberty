/* LE DOM c'est quoi ? */
var b = document.body;
// la variable b contient une référence à la balise body du Dom
console.log(b);
console.log(b.nodeType);
console.log(b.childNodes);

// Fonction de selection dans le DOM

var col = document.querySelector('.test'); // premiere occurence
var cols = document.querySelectorAll('.test'); // selectionne tout les resultats

console.log(col);
console.log(cols);
// Modifiction du DOM
var footer = document.querySelector('footer');
// Modifier le text:
footer.innerText = "<strong>HACKED</strong>"; // interprete pas le html

var divTest = document.querySelector('#test');
divTest.innerHTML = '<strong> TEST </strong>'; // interprete le html
divTest.style.backgroundColor = 'black';

// Creation et suppresion
var nouveauP = document.createElement('p');
nouveauP.innerText = 'coucou coco';
footer.appendChild(nouveauP);

b.removeChild(divTest);

// Modification d'attributs

var img = document.querySelector('#icone');
img.src = 'https://cdn.pixabay.com/photo/2019/11/01/09/35/beach-4593705_960_720.jpg'
// Precision sur le style
var monTitre = document.querySelector('header h1');
console.log(monTitre.className);
monTitre.className = 'test2';
console.log(monTitre.className);
monTitre.classList.add('test3');// ajoute une classe
monTitre.classList.remove('test3'); // surpprime la classe
monTitre.classList.toggle('test3'); // ajoute la classe si elle n'est pas presente
