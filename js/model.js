
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// Classe Drawing
function Drawing() {
    this.monTableau = new Array();
    //Fonction paint Q7
    this.paint = function(canvas){
        canvas.fillStyle = '#F0F0F0'; // set canvas' background color
        canvas.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
    }
};

// Classe Forme
function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;

    //Fonction paint Q7
    this.paint = function(canvas){
            canvas.strokeWeight(this.epaisseur);
            canvas.strokeStyle(this.couleur);
    };

    // Fonction qui retourne la couleur de la forme
    this.getColor = function(){
        return this.couleur;
    };

};

// classe Rectangle extends Forme
function Rectangle(coordHGX, coordHGY, largeur, hauteur){
    Forme.call();
    //Initialisation des propriétées
    this.coordHGX = coordHGX; // Coordonée X
    this.coordHGY = coordHGY; // Coordonnée Y
    this.largeur = largeur; // Largeur du rectangle
    this.hauteur = hauteur; // Hauteur du rectangle

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordHGX;
    }
    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordHGY;
    }
    //Fonction qui retourne la coordonnée de X final
    this.getFinalX = function(){
        return (this.coordHGX + this.largeur);
    }
    //Fonction qui retourne la coordonnée de Y final
    this.getFinalY = function(){
        return (this.coordHGY + this.hauteur);
    }
};

// Classe Line extends Forme
function Line(coordSX, coordSY, coordEX, coordEY){
    Forme.call();
    this.coordSX = coordSX;
    this.coordSY = coordSY;
    this.coordEX = coordEX;
    this.coordEY = coordEY;
};
