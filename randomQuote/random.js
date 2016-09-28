$(document).ready(function(){
	getQuote();
    $("button").click(function(){
   		getQuote();
    });

	$("#share").click(function(){
		sentToTwitter();
	});   
});

function getQuote(){
	$.ajax({
		dataType: "json",
		headers: 
		{
			"X-Mashape-Key": "bJirLgHQEHmshtZr1SfsLOLSy6NUp1ctmD6jsnhSIFHC5mZmed",
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
		success : updateQuote,
		error: function(){
			console.log("error !!!");
		}
	});
}
var baseURL = "https://twitter.com/intent/tweet?hashtags=quotes";
function updateQuote(response){
	$("#quote").text(response.quote);
	$("cite").text(response.author);
}

function sentToTwitter(){
	var currentQuote = $("#quote").text();
	var currentAuthor = $("cite").text();
	var URL = baseURL + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
	window.open(URL, 'Share', 'width=650, height=500, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');

}