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
if("geolocation" in navigator) {navigator.geolocation.getCurrentPosition(function(position) {
    $getWeather(position.coords.latitude + ',' + position.coords.longitude);
});}
  
    $(document).ready(function(){
        setInterval(getWeather, 5000);
    })


var getWeather = function (location) {
    $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
          
      $(".geo .city").text(weather.city);
      $(".geo .temp").text(weather.temp+'&deg;');
      $(".geo .climate_bg").text('<img class="weathericon" src="/images/weathericons/' + weather.code + '.svg">');
      $(".geo .windspeed").text('<p>' + weather.wind.speed + '</p><p>' +  var weather.units.speed + '</p>');
      $(".geo .humidity").text(weather.humidity + ' %');
    
    }
    });
    }
    


