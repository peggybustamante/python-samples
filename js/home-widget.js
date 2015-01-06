$(document).ready(function(){ // begin document.ready block
		  	
	
	$.getJSON('data/food_recalls.json', function(data) {
	  	$("#home-fda").html('<div class="indivCon"><p class="excerpt"><a href="http://www.fda.gov' + data.success.results[0].recall_url + '" target="_blank">' + data.success.results[0].prodname + '</a>, ' + data.success.results[0].description + '. Hazard: ' + data.success.results[0].reason + '. Recalled on ' + moment(data.success.results[0].recall_date).format('MMMM D, YYYY')  + '.</p></div>');
	  	
	});	
	
	$.getJSON('data/cpsc_recalls.json', function(data) {
	  
	  	$("#home-cpsc").html('<div class="indivCon"><p class="excerpt"><a href="' + data.success.results[0].recall_url + '" target="_blank">' + data.success.results[0].descriptions[0] + '</a>. Hazard: ' + data.success.results[0].hazards[0] + '. Recalled on ' + moment(data.success.results[0].recall_date).format('MMMM D, YYYY') + '.</p></div>');
	  	
	});	

}); // end document.ready block




/* 	$.getJSON('data/cpsc_recalls.json', function(data) {
	  
	  	$("#home-cpsc").html('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[0].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="' + data.success.results[0].recall_url + '" target="_blank">' + data.success.results[0].descriptions[0] + '</a>. Hazard: ' + data.success.results[0].hazards[0] + '. </p></div>');
	  	
	});	
*/
