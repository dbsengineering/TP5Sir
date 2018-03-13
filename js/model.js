
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
    }.bind(this);

    // Fonction qui retourne la couleur de la forme
    this.getColor = function(){
        return this.couleur;
    }.bind(this);

};

// classe Rectangle extends Forme
function Rectangle(coordHGX, coordHGY, largeur, hauteur, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur);// Héritage
    //Initialisation des propriétées
    this.coordX = coordHGX; // Coordonée X
    this.coordY = coordHGY; // Coordonnée Y
    this.coordXE = largeur; // Largeur du rectangle
    this.coordYE = hauteur; // Hauteur du rectangle

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    //Fonction qui retourne la coordonnée de X final
    this.getFinalX = function(){
        return this.coordXE;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y final
    this.getFinalY = function(){
        return  this.coordYE;
    }.bind(this);
};

// Classe Line extends Forme
function Line(coordSX, coordSY, coordEX, coordEY, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur); //Héritage
    this.coordX = coordSX;
    this.coordY = coordSY;
    this.coordXE = coordEX;
    this.coordYE = coordEY;

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    //Fonction qui retourne la coordonnée de X final
    this.getFinalX = function(){
        return this.coordXE;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y final
    this.getFinalY = function(){
        return  this.coordYE;
    }.bind(this);

};

// Classe Line extends Forme
function Circle(coordSX, coordSY, rayon, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur); //Héritage
    this.coordX = coordSX;
    this.coordY = coordSY;
    this.rayon = rayon;

    //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordX;
    }.bind(this);

    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordY;
    }.bind(this);

    //Fonction qui retourne le rayon
    this.getRayon = function(){
        return this.rayon;
    }.bind(this);


};
