$(document).ready(function(){ // begin document.ready block

	//$("#main-food").hide();	
	//$("#main-drug").hide();	
	//$("#main-toy").hide();	
	  
	
	$.getJSON('data/food_recalls.json', function(data) {
	  
		for (var i=0; i<3; i++) {
	  		$("#main-food").append('<p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. Hazard: ' + data.success.results[i].reason + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + ']</p>');
		}

		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#foodMcontent").append('<p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. Hazard: ' + data.success.results[i].reason + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + ']</p>');
		}
			  
	});	
	
	$.getJSON('data/drug_recalls.json', function(data) {
	  
		for (var i=0; i<3; i++) {
	  		$("#main-drug").append('<p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. Hazard: ' + data.success.results[i].reason + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + ']</p>');
		}
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#drugMcontent").append('<p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. Hazard: ' + data.success.results[i].reason + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + ']</p>');
		}
	  	  
	});

// CPSC categories

$.getJSON('data/toy_recalls.json', function(data) {
	  	  
		for (var i=0; i<3; i++) {
	  		$("#main-toy").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#toyMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
	  
	});	

	$.getJSON('data/bicycle_recalls.json', function(data) {
	  
	  	$("#main-bicycle").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-bicycle").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#bicycleMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
	  
	});	

	$.getJSON('data/clothing_recalls.json', function(data) {
	  
	  	$("#main-clothing").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-clothing").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#clothingMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
	  
	});	

	$.getJSON('data/chair_recalls.json', function(data) {
	  
	  	$("#main-chair").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-chair").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#chairMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}

	  
	});	

	$.getJSON('data/light_recalls.json', function(data) {
	  
	  	$("#main-light").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-light").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#lightMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
	  
	});	

	$.getJSON('data/vehicle_recalls.json', function(data) {
	  
	  	$("#main-vehicle").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-vehicle").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#vehicleMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}

	});	
	  
	$.getJSON('data/stroller_recalls.json', function(data) {
	  
	  	$("#main-stroller").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-stroller").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#strollerMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}

	});	

	$.getJSON('data/furniture_recalls.json', function(data) {
	  
	  	$("#main-furniture").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-furniture").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#furnitureMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}

	});	

	$.getJSON('data/battery_recalls.json', function(data) {
	  
	  	$("#main-battery").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-battery").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#batteryMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}


	});	

	$.getJSON('data/electronics_recalls.json', function(data) {
	  
	  	$("#main-electronics").html('');	
	  
		for (var i=0; i<3; i++) {
	  		$("#main-electronics").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}
		
		len = data.success.results.length;
		
		for (var i=0; i<len; i++) {
	  		$("#electronicsMcontent").append('<p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards[0] + '. [Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY') + '] </p>');
		}


	});	


/*
// Begin loop of CPSC categories

	var recallCats = ['toy','bicycle','clothing','chair','light','vehicle','stroller','furniture','electronics','battery'];

	var catSelector = ['#main-toy','#main-bicycle','#main-clothing','#main-chair','#main-light','#main-vehicle','#main-stroller','#main-furniture','#main-electronics','#main-battery'];
	
	catSel = '';

	var len = recallCats.length;
	
	for(var i=0; i<len; i++) {
		
		cat = recallCats[i];
		
		catSel = catSelector[i];
		console.log(catSel)

		$.getJSON('data/' + cat + '_recalls.json', function(data) {
			
			console.log(catSel);
			console.log(data.success.results[0].recall_url);
		  
			for (var j=0; j<3; j++) {
				$(catSel).append('<p class="excerpt"><a href="' + data.success.results[j].recall_url + '" target="_blank">' + data.success.results[j].descriptions + '</a> [recall date: ' + data.success.results[j].recall_date + ']</p>');
			}
	  
		});	
	
	}
*/
}); // end document.ready block



