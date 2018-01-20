
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	//Question 1 Déclarer les 4 attributs
	this.coordInitX = 0; // Coordonnées X initiale
	this.coordInitY = 0; // Coordonnée Y initiale
	this.coordFinX = 0; // Coordonnée X de fin
	this.coordFinY = 0; // 

	// Définir ici les attributs de la 'classe'

	// Developper les 3 fonctions gérant les événements

	// Associer les fonctions précédentes aux évènements du canvas.
};


function even1(evt){

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



