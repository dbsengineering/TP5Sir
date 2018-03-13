
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// Classe Drawing
function Drawing() {
    this.forms = new Array();

    this.addForm = function(form) {
        this.forms.push(form);
    }.bind(this);

    //Supprimer la forme de la liste de formes
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    }.bind(this);

    //Fonction qui etourne la liste des formes
    this.getForms = function(){
        return this.forms;
    }.bind(this);
};

// Classe Forme
function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;

    //Fonction qui retourne l'epaisseur de la forme
    this.getEpaisseur = function(){
      return this.epaisseur;
    };

    // Fonction qui retourne la couleur de la forme
    this.getColor = function(){
        return this.couleur;
    };

};

// classe Rectangle extends Forme
function Rectangle(coordHGX, coordHGY, largeur, hauteur, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur);// Héritage
    //Initialisation des propriétées
    this.coordHGX = coordHGX; // Coordonée X
    this.coordHGY = coordHGY; // Coordonnée Y
    this.largeur = largeur; // Largeur du rectangle
    this.hauteur = hauteur; // Hauteur du rectangle

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordHGX;
    };

    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordHGY;
    };

    //Fonction qui retourne la coordonnée de X final
    this.getFinalX = function(){
        return (this.coordHGX + this.largeur);
    };

    //Fonction qui retourne la coordonnée de Y final
    this.getFinalY = function(){
        return (this.coordHGY + this.hauteur);
    };
};

// Classe Line extends Forme
function Line(coordSX, coordSY, coordEX, coordEY, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur); //Héritage
    this.coordSX = coordSX;
    this.coordSY = coordSY;
    this.coordEX = coordEX;
    this.coordEY = coordEY;

    //Fonction qui retourne la coordonnée x de départ
    this.getCoordSX = function(){
        return this.coordSX;
    };

    //Fonction qui retourne la coordonnée y de départ
    this.getCoordSY = function(){
        return this.coordSY;
    };

    //Fonction qui retourne la coordonnée x finale
    this.getCoordEX = function(){
        return this.coordEX;
    };

    //Fonction qui retourne la coordonnée y finale
    this.getCoordEY = function(){
        return this.coordEY;
    };

};
