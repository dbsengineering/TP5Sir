
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getColor();
};

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};
    
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    
    ctx.beginPath();
    ctx.moveTo(this.getCoordSX(), this.getCoordSY());
    ctx.lineTo(this.getCoordEX(), this.getCoordEY());
    ctx.stroke();
};
    
    
Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
    