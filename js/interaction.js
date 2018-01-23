
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	//Question 1. Déclarer les 4 attributs
	this.coordInitX = 0; // Coordonnées X initiale
	this.coordInitY = 0; // Coordonnée Y initiale
	this.coordFinX = 0; // Coordonnée X de fin
	this.coordFinY = 0; // Coordonnée Y de fin
	this.pressed = false; // Variable qui sert à savoir si on a pressé ou pas. Q3

	// Question 2. Developper les 3 fonctions gérant les événements
	// Fonction qur la pression du bouton gauche de la souris
	this.mousedown = function(evt){
		// Q3
		this.coordInitX = getMousePosition(canvas, evt).x;
		this.coordInitY = getMousePosition(canvas, evt).y;
		this.pressed = true;
		// Q5
		console.log("Mouse down : " + this.coordInitX + " " + this.coordInitY);
	}.bind(this);

	// Fonction sur le mouvement du pointeur de la souris
	this.mousemove = function(evt){
		// Q3
		if (this.pressed){
			this.coordFinX = getMousePosition(canvas, evt).x;
			this.coordFinY = getMousePosition(canvas, evt).y;
			// Q5
			console.log("Mouvement : " + this.coordFinX + " " + this.coordFinY);
		}
	}.bind(this);

	// Fonction sur le relâchement du bouton gauche de la souris
	this.mouseup = function(evt){
		if (this.pressed){
			// Q3
			this.coordFinX = getMousePosition(canvas, evt).x;
			this.coordFinY = getMousePosition(canvas, evt).y;
			this.pressed = false;
			// Q5
			console.log("Mouse up : " + this.coordInitX + " " + this.coordInitY + " " + this.coordFinX + " " + this.coordFinY);
		}
	}.bind(this);

	// Question 4. Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.mousedown);
	canvas.addEventListener('mousemove', this.mousemove);
	canvas.addEventListener('mouseup', this.mouseup);
	
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



