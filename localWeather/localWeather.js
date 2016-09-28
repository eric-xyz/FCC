var isImperial = true;
var temperature = 0;
$(document).ready(function(){
	loadWeather();
	$("#temp").click(function(){
		if(isImperial){
			var newTemp = Math.round((temperature-32) * 5 / 9);
			$("#temp").text("  " + newTemp + " " + cel);
		}else{
			$("#temp").text("  " + temperature + " " + fre);
		}
		isImperial = !isImperial;
	});

});
var cel = "℃";
var fre = "℉";
var KEY = "APPID=9167b1afa67593362b5ac9a4be9d898a";
var BASEURL ="http://api.openweathermap.org/data/2.5/weather?";
var UNIT = "&units=imperial";

function loadWeather(){
	$.getJSON('http://ipinfo.io', function(response){
		$("#location-content").text(response.city + " "+response.region+" "+ response.country +" "+ response.postal);
  		getWeather(response.postal, response.country);
	});
}
function getWeather(zipCode, country){
	var URL = BASEURL +KEY+ "&zip="+zipCode+","+country+UNIT;
	$.getJSON(URL, function(response){
		var min ="", max="";
		$.each(response, function(key, value){
			if(key === "main"){
				$.each(value, function(k, v){
					if(k === "temp_min"){
						min = v;
					}else if(k === "temp_max"){
						max = v;
					}
				});
			}else if(key === "weather"){
				var arr = $.makeArray(value);
				$.map(arr[0], function(v, k ) {
 					if(k === "main"){
 						$("#condition").text(v);
 						getIcon(v);
 					}
				});
				
			}
		});
		if(min !== "" && max != ""){
			temperature = Math.round((min + max)/2);
			$("#temp").text(temperature +" "+fre);
		}
	});
}
function getIcon(v){
	switch (v){
		case "Clear":
			$("#changingIcon").removeClass().addClass("wi-day-sunny").addClass("wi");
			break;
		case "Clouds":
			$("#changingIcon").removeClass().addClass("wi-day-cloudy").addClass("wi");
			break;
		case "Snow":
			$("#changingIcon").removeClass().addClass("wi-snow-wind").addClass("wi");
			break;
		default:
			$("#changingIcon").removeClass().addClass("wi-rain").addClass("wi");
	}
}