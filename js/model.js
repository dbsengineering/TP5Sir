
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// Classe Drawing
function Drawing() {
    this.monTableau = new Array();
    
};

// Classe Forme
function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
};

// classe Rectangle extends Forme
function Rectangle(coordHGX, coordHGY, largeur, hauteur){
    Forme.call();
    this.coordHGX = coordHGX;
    this.coordHGY = coordHGY;
    this.largeur = largeur;
    this.hauteur = hauteur;
};

// Classe Line extends Forme
function Line(coordSX, coordSY, coordEX, coordEY){
    Forme.call();
    this.coordSX = coordSX;
    this.coordSY = coordSY;
    this.coordEX = coordEX;
    this.coordEY = coordEY;
};
