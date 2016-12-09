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
    getWeather(position.coords.latitude + ',' + position.coords.longitude);
});}
  
  
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  console.log( lat, long); 
  
    $(document).ready(function(){
        setInterval(getWeather, 5000);
    })


var getWeather = function (location, woeid) {
    $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
        var city = weather.city;
        var temp = weather.temp+'&deg;';
        var  wcode = '<img class="weathericon" src="/images/weathericons/' + weather.code + '.svg">';
        var wind = '<p>' + weather.wind.speed + '</p><p>' +  var weather.units.speed + '</p>';
        var humidity = weather.humidity + ' %';
        
      $(".location").text(city);
      $(".temperature").text(temp);
      $(".climate_bg").text(wcode);
      $(".windspeed").text(wind);
      $(".humidity").text(humidity);
    
    }
    });
    }
    


