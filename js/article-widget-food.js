$(document).ready(function(){ // begin document.ready block
		  	
	
	$.getJSON('data/food_recalls.json', function(data) {
	  
	  	$("#article-food").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#article-food").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. <br />Hazard: ' + data.success.results[i].reason + '. </p></div>');
		}
	  
	});	
	
}); // end document.ready block




