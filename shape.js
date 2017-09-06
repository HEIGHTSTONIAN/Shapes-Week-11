function Shape(){
}

Shape.prototype.get_type = function(){
	return this instanceof constructor;
}

function Triangle(side1, side2, side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;
var newTriangle = new Triangle(36, 36, 36);
console.log(newTriangle.get_type());



function Square(side){
	this.side = side;
}

Square.prototype = new Shape();
Square.prototype.constructor = Square;
var newSquare = new Square(25);
console.log(newSquare.get_type());

function Pentagon(side1, side2, side3, side4, side5){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}

Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;
var newPentagon = new Pentagon(15, 20, 17, 22, 19);
console.log(newPentagon.get_type());
