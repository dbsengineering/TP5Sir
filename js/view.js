
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getColor();
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    //TODO Manager color
    ctx.rect(this.getInitX(), this.getInitY(), this.getLargeur(), this.getHauteur());
    ctx.stroke();
};
    
Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    //TODO Manager color
    
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Circle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    //TODO Manager color

    ctx.beginPath();
    ctx.arc(this.getInitX(), this.getInitY(), this.getRayon(), 0, 2*Math.PI, false);
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

Drawing.prototype.updateShapeList = function(){

    var shapeList = document.getElementById('shapeList');

    //Création du bouton
    var li = document.createElement('li');
    var button = document.createElement('button');
    var span = document.createElement('span');


    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    // Liste
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', 'form-'+(this.forms.length-1));
    // Button
    button.setAttribute('class', 'btn btn-default');
    button.setAttribute('id', 'button_'+(this.forms.length-1));
    button.setAttribute('onClick', 'drawing.deleteShape('+(this.forms.length-1)+')');

    button.appendChild(span);
    li.appendChild(button);

    var maForme = this.forms[(this.forms.length-1)];

    if(maForme instanceof Rectangle){
        li.appendChild(document.createTextNode("Rectangle(" + maForme.getInitX() + ","
            + maForme.getInitY() + "," + maForme.getLargeur() + "," + maForme.getHauteur() + ")"));
    }
    if(maForme instanceof Line){
        li.appendChild(document.createTextNode("Line(" + maForme.getInitX() + "," + maForme.getInitY()
            + "," + maForme.getFinalX() + "," + maForme.getFinalY() + ")"));
    }
    if(maForme instanceof Circle){
        li.appendChild(document.createTextNode("Circle(" + maForme.getInitX() + "," + maForme.getInitY()
            + "," + maForme.getRayon() + ")"));
    }

    //On ajoute le button de suppression
    shapeList.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){
    var li = document.getElementById('form-'+id);
    var index = $(li).index();
    //Delete liste
    li.remove();
    //Suppression formes
    this.removeForm(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};
    