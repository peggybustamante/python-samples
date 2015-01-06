$(document).ready(function(){ // begin document.ready block
		 	
	$.getJSON('data/nhtsa_recalls.json', function(data) {
	  
	  	$("#article-nhtsa").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#article-nhtsa").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].defect_summary + '</a></p></div>');
		}
	  
	});	

}); // end document.ready block
