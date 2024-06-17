// Create an empty array for Pokemon
let items = [];
// Fetch pokemon from the API
fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
  //Fetch returns an object called res by default
  //Parse the response as a JSON object
  .then((res) => res.json())
  // Callback used to parse the data
  .then(
    (result) => {
      // Assign and store the data in the items array
      items = result;
      // Return the data in the console
      console.log("Name: " + result.name);
      console.log("Weight: " + result.weight);
      // Extract and log the abilities
      const abilities = result.abilities.map(
        (abilityInfo) => abilityInfo.ability.name
      );
      console.log("Abilities: " + abilities.join(", "));
    } 
  ), 
  // Error handling is executed if fetch fails
  (error) => {
    // Return an error in the console
    console.log(error);
  };
