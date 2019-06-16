var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedcolor; 
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {
	//initiate colors
	squares[i].style.backgroundColor = colors[i];

	//set events on color
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		//alert(pickedcolor);

		if (clickedColor === pickedcolor) {
		message.textContent = "Correct!";
		changeColors(pickedcolor);
		h1.style.backgroundColor = pickedcolor;
	}else {
		this.style.backgroundColor = "#232323";
		message.textContent = "Try again!";
	}
	});

	
}


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var ranNum = Math.floor(Math.random() * colors.length);
	return colors[ranNum];
}

function generateRandomColors(num){

	var r,g,b;
	var generatedColor;
	var colorsArray = new Array(num);

	for (var i = 0; i < num; i++) {

		r= Math.floor(Math.random() * 256);
		g= Math.floor(Math.random() * 256);
		b= Math.floor(Math.random() * 256);

		generatedColor = "rgb("+r+", "+g+", "+b+")";
		colorsArray[i] = generatedColor;
	}
return colorsArray;
}
