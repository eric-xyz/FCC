$(document).ready(function(){
	getQuote();
    $("button").click(function(){
   		getQuote();
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
function updateQuote(response){
	$("#quote").text(response.quote);
	$("cite").text(response.author);
}
