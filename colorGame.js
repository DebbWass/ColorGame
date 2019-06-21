var colors;
var squares = document.querySelectorAll(".square");
var pickedcolor;
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var flag;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var colorsNum = 6;

gameInit(colorsNum);

resetBtn.addEventListener("click", function(){
	resetBtn.textContent = "New Colors";
	gameInit(colorsNum);

});

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colorsNum = 3;
	gameInit(colorsNum);

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colorsNum = 6;
	gameInit(colorsNum);
});
/**************************************************************************************************************************************/
//Functions:

function gameInit(num){
	//initiate the game
	colors = generateRandomColors(num);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedcolor;
	flag = false;
	message.textContent = "";
	resetBtn.textContent = "New Colors";


	for (var i = 0; i < squares.length; i++) {
		//initiate colors
		if (num == 3) {
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}

		}else{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}

		//set events on color
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			//alert(pickedcolor);
			
			if (clickedColor === pickedcolor) {
				message.textContent = "Correct!";
				changeColors(pickedcolor);
				h1.style.backgroundColor = pickedcolor;
				flag = true;
				resetBtn.textContent = "Play Again?"
			}else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try again!";
			}
		});

	}

}


function changeColors(color){
	//change the colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	//pickes random color from the colors array
	var ranNum = Math.floor(Math.random() * colors.length);
	return colors[ranNum];
}

function generateRandomColors(num){
//generates array of random colors
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
