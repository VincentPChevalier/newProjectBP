// CSS Color Names
// Compiled by @bobspace w/ additions by me

const colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RebeccaPurple","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

const newColorArray = [];

// matches the text input to the colors array
const findMatches = function(wordToMatch, newColorArray) {
	const gradient = colors.filter(color => {
		const pattern = `^${wordToMatch}`;
		const regex = new RegExp(pattern, 'gi');
		return color.match(regex);
	});
	// console.log(gradient, wordToMatch, newColorArray);
	return gradient;
}

const colorListing = function(array) {
	$(".colornames").empty();
	array.map(colorname => {
		const colorItem = $("<li>").text(colorname).css("color", `${colorname}`);
		$(".colornames").append(colorItem);
	});
}

// creates a gradient of all the color combinations that can be made with the text matches 
const createGradient = function() {
	const matchArray = findMatches(this.value, newColorArray);
	$(".colornames").empty();
	if (this.value === ""){
		$(".gradient").css("background", "white");
	} else {
		colorListing(matchArray);
		let newGradient = "";
		newGradient = matchArray.join(", ");
		console.log(newGradient);
		if (matchArray.length === 1){
			$(".gradient").css("background", `${newGradient}`);
		} else {
			$(".gradient").css("background", `radial-gradient(circle at center, ${newGradient})`);
		}
	}
}

const gradientInput = document.querySelector(".search");

gradientInput.addEventListener('change', createGradient);
gradientInput.addEventListener('keyup', createGradient);

$(function() {
	colorListing(colors);
	$("ul").on("click", "li", function(){
		$(this).toggle();
		const colorVal = $(this).text();
		console.log(this, colorVal);
	});
});


//bad code

// function createGradient(colours) {
	// const matchArray = findMatches(this.value, newColorArray);
	// const css = matchArray.map(color => {
	// 	const newGradient = 
	// });
// 	$("body").css("background", `linear-gradient(45deg, ${colours})`);
// }

// const searchInput = document.querySelector(".search");

// searchInput.addEventListener('change', createGradient);
// searchInput.addEventListener('keyup', createGradient);


// function findMatches(wordToMatch, color) {
// 	return colors.filter(color => {
// 		var pattern = `^${wordToMatch}`;
// 		const regex = new RegExp(pattern, 'gi');
// 		return color.match(regex);
// 		// createGradient(color.match(regex));
// 	});
// }
	
	// b.setAttribute('background-color', 'blue')
	// const matchArray = findMatches(colors);
	// b.setAttribute('background-color', `linear-gradient(45deg, ${gradient})`)



