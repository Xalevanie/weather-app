//// Randomize things
//// Store & Generate Number
//var maxRand = 2;
//var numRand = Math.floor(Math.random() * maxRand);
////console.log(numRand);
//
//// Store images
//var img0 = '/img/natnat003.jpg';
//var img1 = '/img/natnat004.jpg';
//
//
//// Show Images
//$('#backg').attr('src', eval('img' + numRand));




/*******Geolocation********/
// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo button').show(); 

} else {
  
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

$('.geo button').click( function() {
     
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
          
      $(".geo .city").text(weather.city);
      $(".geo .temp").text(weather.temp+'&deg;');
      $(".geo .climate_box").text('<img class="weathericon" src="/weather-app/img/weathericons/' + weather.code + '.svg">');
      $(".geo .windspeed").text('<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>');
      $(".geo .humidity").text(weather.humidity + ' %');
    
    }
    });
    }
    


