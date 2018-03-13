
var editingMode = { rect: 0, line: 1 };

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
        this.currColour = document.getElementById('colour').value;
        if(document.getElementById('butRect').checked){
            this.currEditingMode = 0;
        }else if(document.getElementById('butLine').checked){
            this.currEditingMode = 1;
        }

        //Siwtch sur une ligne ou un rectangle et affectation à la forme courante
        console.log(this.currEditingMode);
        switch(this.currEditingMode){

			case 0:
                this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY
					,0, 0, this.currLineWidth, this.currColour);
				break;
			case 1:
                this.currentShape = new Line(this.DnD.coordInitX, this.DnD.coordInitY,
                    this.DnD.coordFinX, this.DnD.coordFinY, this.currLineWidth, this.currColour);
				break;
		}
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

	}.bind(this);

	//Dessin sur le mouvement
    this.onInteractionUpdate = function(){
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        switch(this.currEditingMode){

            case 0:
                this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY
                    ,this.DnD.coordFinX, this.DnD.coordFinY, this.currLineWidth, this.currColour);
                break;
            case 1:
                this.currentShape = new Line(this.DnD.coordSX, this.DnD.coordSY,
                    this.DnD.coordEX, this.DnD.coordEY, this.currLineWidth, this.currColour);
                break;
        }
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

    }.bind(this);

    //Fin du dessin
    this.onInteractionEnd = function(){
        switch(this.currEditingMode){

            case 0:
                this.currentShape = new Rectangle(this.DnD.coordInitX, this.DnD.coordInitY
                    ,this.DnD.coordFinX,this.DnD.coordFinY, this.currLineWidth, this.currColour);
                break;
            case 1:
                this.currentShape = new Line(this.DnD.coordSX, this.DnD.coordSY,
                    this.DnD.coordEX, this.DnD.coordEY, this.currLineWidth, this.currColour);
                break;
        }
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx, canvas);

    }.bind(this);

};


