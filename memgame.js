var count = document.getElementById("count");
var pic = document.getElementsByClassName("pic");
var backImages = document.getElementsByClassName("backImage");
var cardFlipped = '';
var sCardFlipped = '';
var matched = [];
var clicked = 0;

// keeping track of how many cards have been clicked 
for(let i = 0; i < pic.length; i++){
	pic[i].addEventListener("click", function(){
		count.innerText++;
	});
}


// adding in pcitures to be matched

var yellow = document.getElementsByClassName("yellow");
for(let i = 0; i < yellow.length; i++){
	yellow[i].classList.add("backImage");
	yellow[i].addEventListener("click", function(){
		yellow[i].src = "https://www.onlygfx.com/wp-content/uploads/2017/10/yellow-watercolor-splatter-15.png";
		// keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = yellow[i];
		}else{
			cardFlipped = yellow[i];
		}
	});
}

var red = document.getElementsByClassName("red");
for(let i = 0; i < red.length; i++){
	red[i].classList.add("backImage");
	red[i].addEventListener("click", function(){
		red[i].src = "https://www.onlygfx.com/wp-content/uploads/2017/02/red-splatter-11.png";
		//keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = red[i];
		}else{
			cardFlipped = red[i];
		}
	})
}


var green = document.getElementsByClassName("green");
for(let i = 0; i < green.length; i++){
	green[i].classList.add("backImage");
	green[i].addEventListener("click", function(){
		green[i].src = "https://www.onlygfx.com/wp-content/uploads/2017/02/green-splatter-1.png";
		//keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = green[i];
		}else{
			cardFlipped = green[i];
		}
	},);
}

var purple = document.getElementsByClassName("purple");
for(let i = 0; i < purple.length; i++){
	purple[i].classList.add("backImage");
	purple[i].addEventListener("click",function(){
		purple[i].src = "https://pngimage.net/wp-content/uploads/2018/06/paint-splatter-png-6.png";
		//keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = purple[i];
		}else{
			cardFlipped = purple[i];
		}
	});
}

var teal = document.getElementsByClassName("teal");
for(let i = 0; i < teal.length; i++){
	teal[i].classList.add("backImage");
	teal[i].addEventListener("click", function(){
		teal[i].src = "https://i.ya-webdesign.com/images/splat-transparent-teal-3.png";
		//keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = teal[i];
		}else{
			cardFlipped = teal[i];
		}
	})
}


var orange = document.getElementsByClassName("orange");
for(let i = 0; i < orange.length; i++){
	orange[i].classList.add("backImage");
	orange[i].addEventListener("click", function(){
		orange[i].src = "https://i.ya-webdesign.com/images/splat-transparent-orange-1.png";
		//keeping track of what was flipped every two cards
		if(count.innerText % 2 === 0){
			sCardFlipped = orange[i];
		}else{
			cardFlipped = orange[i];
		}
	})
}

// if there is a match stay flipped, if not, flip over
for(let i = 0; i < backImages.length; i++){
	backImages[i].addEventListener("click", function(){
		if(cardFlipped.src === sCardFlipped.src && cardFlipped.id !== sCardFlipped.id && !matched.includes(backImages[i].src)){
			matched.push(backImages[i].src);
		}
		setTimeout(function(){ 
			if(!matched.includes(backImages[i].src)){
				backImages[i].src = "https://render.fineartamerica.com/images/rendered/default/poster/8.000/8.000/break/images/artworkimages/medium/2/white-paint-splash-on-black-background-biwa-studio.jpg";
			}
		}, 1000);
	});
}

// creating start new game button once game is finished
var game = document.getElementById("game");
var startOver = document.createElement('a');
startOver.id = "start-new-game";
startOver.href = "#the-game";
startOver.innerText = "Play Again";
for(let i = 0; i < pic.length; i++){
	pic[i].addEventListener("click", function(){
		setTimeout(function(){
			if(matched.length === 6){		
				game.appendChild(startOver);
			}
		}, 3000);
	})
}


// starting a new game
startOver.addEventListener("click", function(){
	window.location.reload();
});	



