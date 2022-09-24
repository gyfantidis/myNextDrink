let letter = window.location.search;
//document.getElementById("write").innerHTML = window.location.search;


console.log(letter);



function getRandomCocktail(){

	fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php'+letter)
	.then(
		function(response){
			if (response.status !== 200){
				console.log('Looks like there was a problem. Status code:' + response.status);
				return;
			}

			response.json().then(function(data){
				displayRandomCocktail(data)
			});
		}
	)

		.catch(function(err){
			console.log('Fetch Error :-S', err)
		});
}


getRandomCocktail();
var insideHTML = document.getElementById("insideHTML");
var myHTML ='';



let k=0;
function displayRandomCocktail(cocktail){
do{
	myHTML += `
	<div class="col-lg-4">
		<div class="listing-item">
			<div class="left-image">
				<a href="theCoctail.html?greeting=`+cocktail.drinks[k].idDrink+`"><img src="`+cocktail.drinks[k].strDrinkThumb+`" alt=""></a>
				<div class="hover-content">
					<div class="main-white-button">
						<a href="theCoctail.html?greeting=`+cocktail.drinks[k].idDrink+`"> More Info</a>
					</div>
				</div>
			</div>
			<div class="right-content align-self-center">
				<a href="theCoctail.html?greeting=`+cocktail.drinks[k].idDrink+`"><h4 id="t"`+k+`>`+cocktail.drinks[k].strDrink+`</h4></a>

			</div>
		</div>
	</div>`;

	k = k+1;

}

while (k < cocktail.drinks.length)

insideHTML.innerHTML = myHTML;

}
