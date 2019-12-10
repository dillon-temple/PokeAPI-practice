$(document).ready(function() {


    for(let i = 0; i < 150; i++){

        var newPokemon = i+1
        $('#poke' + i).after('<div class="pokeball" id=poke' + newPokemon + '></div>');
        $('#poke' + newPokemon).css("background-image", "url(" + "http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + newPokemon + ".png" + ")");
    };
    
    var randompoke = "https://pokeapi.co/api/v2/pokemon/3";
    console.log(randompoke);
});