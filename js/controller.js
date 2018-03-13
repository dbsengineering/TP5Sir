
var editingMode = { rect: 0, line: 1 , circle: 2};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	//Début du dessin
	this.onInteractionStart = function(){
        this.currLineWidth = document.getElementById('spinnerWidth').value;
        this.currColour = document.getElementById('couleur').value;
        if(document.getElementById('butRect').checked){
            this.currEditingMode = editingMode.rect;
        }
        if(document.getElementById('butLine').checked){
            this.currEditingMode = editingMode.line;
        }
        if(document.getElementById('butCircle').checked){
            this.currEditingMode = editingMode.circle;
        }

        //Switch sur une ligne ou un rectangle et affectation à la forme courante
        switch(this.currEditingMode){
            case editingMode.rect:
                console.log("Un rectangle");
                this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY,
                    0, 0, this.currLineWidth, this.currColour);
                break;
            case editingMode.line:
                console.log("Une ligne");
                this.currentShape = new Line(this.DnD.coordInitX, this.DnD.coordInitY,
                    this.DnD.coordInitX, this.DnD.coordInitY, this.currLineWidth, this.currColour);
                break;

            case editingMode.circle:
                console.log("Un cercle");
                var abPow = Math.pow(Math.abs(this.DnD.coordInitX-this.DnD.coordFinX),2);
                var acPow = Math.pow(Math.abs(this.DnD.coordInitY-this.DnD.coordFinY),2);
                var rayon = Math.sqrt(abPow + acPow);
                this.currentShape = new Circle(this.DnD.coordInitX, this.DnD.coordInitY,
                    rayon, this.currLineWidth, this.currColour);
                break;
        }

        this.currentShape.paint(ctx, canvas);

	}.bind(this);

	//Dessin sur le mouvement
    this.onInteractionUpdate = function(){

        if (this.currEditingMode == editingMode.rect){
            var largeur = this.DnD.coordFinX - this.DnD.coordInitX;
            var hauteur = this.DnD.coordFinY - this.DnD.coordInitY;
            this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY, largeur, hauteur, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.line){
            this.currentShape = new Line(this.DnD.coordInitX, this.DnD.coordInitY, this.DnD.coordFinX, this.DnD.coordFinY, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.circle){
            var abPow = Math.pow(Math.abs(this.DnD.coordInitX-this.DnD.coordFinX),2);
            var acPow = Math.pow(Math.abs(this.DnD.coordInitY-this.DnD.coordFinY),2);
            var rayon = Math.sqrt(abPow + acPow);
            this.currentShape = new Circle(this.DnD.coordInitX, this.DnD.coordInitY, rayon, this.currLineWidth, this.currColour);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

    }.bind(this);

    //Fin du dessin
    this.onInteractionEnd = function(){
        if (this.currEditingMode == editingMode.rect){
            var largeur = this.DnD.coordFinX - this.DnD.coordInitX;
            var hauteur = this.DnD.coordFinY - this.DnD.coordInitY;
            this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY, largeur, hauteur, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.line){
            this.currentShape = new Line(this.DnD.coordInitX, this.DnD.coordInitY, this.DnD.coordFinX, this.DnD.coordFinY, this.currLineWidth, this.currColour);
        }
        if (this.currEditingMode == editingMode.circle){
            var abPow = Math.pow(Math.abs(this.DnD.coordInitX-this.DnD.coordFinX),2);
            var acPow = Math.pow(Math.abs(this.DnD.coordInitY-this.DnD.coordFinY),2);
            var rayon = Math.sqrt(abPow + acPow);
            this.currentShape = new Circle(this.DnD.coordInitX, this.DnD.coordInitY, rayon, this.currLineWidth, this.currColour);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addForm(this.currentShape);
        drawing.paint(ctx, canvas);
        drawing.updateShapeList(this.currentShape);
        this.currentShape = null;

    }.bind(this);


};


