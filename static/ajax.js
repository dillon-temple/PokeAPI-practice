$(document).ready(function () {

    var pokemonAmount = 55

    function ConstructPage() {

        $(".pokeball").remove();

        for (let i = 0; i < pokemonAmount; i++) {

            $('#poke' + i).after('<div class="pokeball" id=poke' + (i + 1) + '></div>');
            $('#poke' + (i + 1)).append('<div class="pokename"></div><div class="pokehome"></div>')

            $.get("http://pokeapi.co/api/v2/pokemon/" + (i + 1) + "/", function (res) {
                var name = "#" + (i + 1) + " " + res.name.charAt(0).toUpperCase() + res.name.slice(1);
                $('#poke' + (i + 1)).find(".pokename").html(name)
                $('#poke' + (i + 1)).find(".pokehome").css("background-image", "url(" + res.sprites.front_default + ")");

            }, 'json');
        };

        $(".pokeball").click(function () {
            var selection = $(this).attr('id');
            selection = selection.slice(4, (selection.length + 1));
            console.log(selection);

            $.get("http://pokeapi.co/api/v2/pokemon/" + selection + "/", function (res) {
                console.log(res);
                // Portraits
                $(".Portrait").find(".large_pic").css("background-image", "url(" + res.sprites.front_default + ")");
                $(".Portrait").find(".mini_pic").css("background-image", "url(" + res.sprites.front_shiny + ")");
                $(".header_text").hide();
                $(".header_text").html(res.name.charAt(0).toUpperCase() + res.name.slice(1));
                setTimeout($(".header_text").fadeIn(500), 8000);

                // Stats

                $(".pokemonInfo").append("<li>" + res.stats[0].stat.name + ": " + res.stats[0].base_stat + "</li>");
                $(".pokemonInfo").append("<li>" + res.stats[1].stat.name + ": " + res.stats[1].base_stat + "</li>");
                $(".pokemonInfo").append("<li>" + res.stats[2].stat.name + ": " + res.stats[2].base_stat + "</li>");
                $(".pokemonInfo").append("<li>" + res.stats[3].stat.name + ": " + res.stats[3].base_stat + "</li>");
                $(".pokemonInfo").append("<li>" + res.stats[4].stat.name + ": " + res.stats[4].base_stat + "</li>");
                $(".pokemonInfo").append("<li>" + res.stats[5].stat.name + ": " + res.stats[5].base_stat + "</li>");

            }, 'json');

            $(".pokeball").fadeOut(1500);
            $(".button").fadeIn(2000);
            setTimeout($(".box").css("display", "inline-block"), 3000);
            $(".form_container").hide();
        })
    };

    $(".button").click(function () {
        $(this).hide();
        $(".box").hide();
        $(".pokemonInfo").empty();
        $(".pokeball").fadeIn(2000);
        $("#poke0").hide();
        $(".header_text").hide()
        $(".header_text").html("Pokemon Ajax")
        setTimeout($(".header_text").fadeIn(500), 8000);
        $(".form_container").show();
    })

    // Picture switch
    $(".mini_pic").click(function () {
        var temp = $(this).css("background-image");
        console.log(temp);
        $(".mini_pic").css("background-image", $(".large_pic").css("background-image"));
        $(".large_pic").css("background-image", temp);
        if($(".shiny_version").html() == "Click for Shiny Version!"){
            $(".shiny_version").html("Click for Regular Version!");
        }
        else{
            $(".shiny_version").html("Click for Shiny Version!");
        }
    })


    $("#pokeButton").click(function () {
        var selection = $("input#pokeAmount").val();
        if(selection > 807){
            $(".form_container").effect("shake", {times:2}, 1000);
        }
        else{
            pokemonAmount = selection;
            ConstructPage();
        }

    })

    ConstructPage();

});