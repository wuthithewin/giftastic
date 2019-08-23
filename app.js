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
    $('.container').empty()

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + cartype + "&api_key=dc6zaTOxFJmzC&limit=10";
    // api.giphy.com/v1/gifs/search?q= 
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        for( var i = 0; i<response.data.length; i++){
            var currentGiphy = response.data[i]
            var gipDiv = $('<div>')
            var gipImg = $('<img>')
            var animate = currentGiphy.images.fixed_height.url
            var still = currentGiphy.images.fixed_height_still.url
            gipImg.attr("src", still)
            gipImg.attr("data-animate", animate )
            gipImg.attr("data-still", still )
            gipImg.attr("data-state", "state" )
            gipImg.addClass("carimage")
            gipDiv.append(gipImg)
            $('.container').append(gipDiv)

        }   
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
$(document).on('click', '.carimage', function(){

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $(document).on('click', '#submit', function(){
      $('#buttons').empty();
  var userSearch = $('#search').val()
    buttons.push(userSearch)
    displayButton();
    $('#search').val("")
})
displayButton()