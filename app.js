var buttons = ["subaru", "kia", "toyota"]
function displayButton(){
    for(i=0; i<buttons.length; i++){
var b = $('<button>')
b.addClass("car-buttons")
b.text(buttons[i])
$('#buttons').append(b)
    }
}
function giphy(cartype){
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cartype + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response)

// create div 3attr data-still data-anime date-state
// addClass
// append

    //     var pTitle = $('<p>').text(response.Title);
    // var pActors = $('<p>').text(response.Actors);
    // var pPlot = $('<p>').text(response.Plot);
    // var imgPoster = $('<img>').attr('src', response.Poster);
    // var d = $('<div>').append(pTitle, imgPoster, pPlot, pActors);
    //     $('#movieInfo').prepend(d);
    })
}
$(document).on('click', '.car-buttons', function(){
    var carIndex = ($(this).text())
    giphy(carIndex)
})
displayButton()