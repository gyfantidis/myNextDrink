const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('greeting');
  console.log(greetingValue);

  function getFinalCocktail(){

  	fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+greetingValue)
  	.then(
  		function(response){
  			if (response.status !== 200){
  				console.log('Looks like there was a problem. Status code:' + response.status);
  				return;
  			}

  			response.json().then(function(data){
  				displayFinalCocktail(data)
  			});
  		}
  	)

  		.catch(function(err){
  			console.log('Fetch Error :-S', err)
  		});
  }




  var finalHTML = document.getElementById("finalHTML");
  var myHTML ='';
  let ingreds = [];
  let measure = [];
  let i = 1;

  	getFinalCocktail();
  	function displayFinalCocktail(cocktail){
          document.querySelector("#title").textContent = cocktail.drinks[0].strDrink;

          while(cocktail.drinks[0][`strIngredient${i}`] !== null ){
            ingreds.push(cocktail.drinks[0][`strIngredient${i}`]);
            measure.push(cocktail.drinks[0][`strMeasure${i}`]);
            console.log(i);
            i++;
          }

console.log(ingreds);
console.log(measure);


  		 myHTML = `
  		 <div class="col-lg-12">
   			<div class="listing-item">
   				<div class="left-image">
   					<img src="`+cocktail.drinks[0].strDrinkThumb+`" alt="">
   				</div>
   				<div class="right-content align-self-center">
          <h4><strong>Name: </strong>`+cocktail.drinks[0].strDrink+`</h4>
   					<h4><strong>Category: </strong>`+cocktail.drinks[0].strCategory+`</h4>
            <h4><strong>Glass: </strong>`+cocktail.drinks[0].strGlass+`</h4>
            <h4><strong>Type: </strong>`+cocktail.drinks[0].strAlcoholic+`</h4>
            <br> <br>
            <h4><strong>Ingredients: </strong>
            </h4>`;

            for(let n = 0; n < ingreds.length; n ++ ){
              myHTML += `
              <h6> <strong> `+ingreds[n]+ `</strong> `+'  -  '+measure[n]+ `</h6>
              `;
            }

            myHTML += `<br> <br>
            <h4><strong>Instructions: </strong> </h4>
            <h6>`+cocktail.drinks[0].strInstructions+`
            </h6>

   				</div>
   			</div>
   		</div>
      `;
  		console.log(cocktail.drinks[0].strDrink);
  finalHTML.innerHTML = myHTML;
  }
