function getRandomCocktail(){

	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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


var randomHTML = document.getElementById("randomHTML");
var myHTML ='';
let k=0;
do{

	getRandomCocktail();
	function displayRandomCocktail(cocktail){

		 myHTML += `
		 <div class="col-lg-12">
 			<div class="listing-item">
 				<div class="left-image">
 					<a href="theCoctailOnlyRandom.html?greeting=`+cocktail.drinks[0].idDrink+`"><img src="`+cocktail.drinks[0].strDrinkThumb+`" alt=""></a>
 				</div>
 				<div class="right-content align-self-center">
 					<a href="theCoctailOnlyRandom.html?greeting=`+cocktail.drinks[0].idDrink+`"><h4 id="t1">`+cocktail.drinks[0].strDrink+`</h4></a>
 					<h6>`+cocktail.drinks[0].strCategory+`</h6>

 					<div class="main-white-button">
 						<a href="theCoctailOnlyRandom.html?greeting=`+cocktail.drinks[0].idDrink+`"><i class="fa fa-eye"></i> More Info</a>
 					</div>
 				</div>
 			</div>
 		</div>`;
		console.log(cocktail.drinks[0].strDrink);
randomHTML.innerHTML = myHTML;
}
k = k+1;
}while(k<9)
