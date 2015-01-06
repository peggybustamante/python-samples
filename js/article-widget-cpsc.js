$(document).ready(function(){ // begin document.ready block
		 	
	$.getJSON('data/cpsc_recalls.json', function(data) {
	  
	  	$("#article-cpsc").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#article-cpsc").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. <br />Hazard: ' + data.success.results[i].hazards[0] + '. </p></div>');
		}
	  
	});	

}); // end document.ready block
