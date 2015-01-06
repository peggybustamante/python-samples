$(document).ready(function(){ // begin document.ready block

/* CHILD-RELATED PRODUCTS */

subcatChildHed = ["Pacifiers & Accessories","Sippy/Tumbler Cups","Baby Seats (Non-Bath)","Infant Carriers/Slings/Backpacks/Car Seats","Booster Seats","High Chairs/Booster Chairs","Bicycle Child Carriers/Trailers","Furniture (Children)","Swings (Baby/Cradle)","Bassinets/Baby Hammocks","Clothing (Children)","Baby Socks","Costume/Childrens Jewelry","Cribs","Playpens/Play yards/Portable Cribs/Sleepers","Strollers & Accessories","Swing Sets","Rattles","Toy Animals Stuffed/Not Stuffed","Toy Cars","Toy Dolls & Accessories","Toy Miscellaneous","Toy Musical Instruments","Toy Play Sets/Activity Sets","Toy Ride-on","Toy Vehicles","Toy Balls","Toy Figures","Toy Guns","Toy Infants/Cribs/Strollers","Toy Trucks","Toys Ride-On"];

subcatChildJSON = ["Pacifiers+Accessories","Sippy+Tumbler+Cups","Baby+Seats+Non-Bath","Infant+Carriers+Slings","Booster+Seats","High+Chairs+Booster+Chairs","Bicycle+Child+Carriers","Furniture+Children","Swings+Baby+Cradle","Bassinets+Baby+Hammocks","Clothing+Children","Baby+Socks","Costume+Childrens+Jewelry","Cribs","Playpens+Play+yards","Strollers+Accessories","Swing+Sets","Rattles","Toy+Animals+Stuffed","Toy+Cars","Toy+Dolls+Accessories","Toy+Miscellaneous","Toy+Musical+Instruments","Toy+Play+Sets+Activity+Sets","Toy+Ride-on","Toy+Vehicles","Toy+Balls","Toy+Figures","Toy+Guns","Toy+Infants+Cribs+Strollers","Toy+Trucks","Toys+Ride-On"];

		$("#child-related").html('');
		
		len = subcatChildHed.length;
		//console.log("subcatChildHed length: " + len);

		for (var i=0; i<len; i+=2) {
			if (i+1 < len) {
				$("#child-related").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatChildJSON[i] + '" data-toggle="modal">' + subcatChildHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatChildJSON[i+1] + '" data-toggle="modal">' + subcatChildHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#child-related").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatChildJSON[i] + '" data-toggle="modal">' + subcatChildHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}

/* HOUSEHOLD PRODUCTS */

subcatHouseHed = ["Baths & Bath Accessories","Blankets ","Blinds, Shades & Cords","Carbon Monoxide Detectors/Alarms ","Cleaners/Cleaning Products ","Clothing (Adults)","Shoes, Sandals & Boots","Fireplaces & Accessories","Beds/Cots","Bunk Beds","Chairs, Stools & Benches","Hammocks","Mattresses & Covers","Furniture (Miscellaneous)","Candles & Candle Holders","Lamps","Lights & Accessories","Lights (Seasonal)","Thermostats/Thermometers/Sensors"];

subcatHouseJSON = ["Baths+Bath+Accessories","Blankets","Blinds+Shades+Cords","Carbon+Monoxide+Detectors","Cleaners+Cleaning+Products","Clothing+Adults","Shoes+Sandals+Boots","Fireplaces+Accessories","Beds+Cots","Bunk+Beds","Chairs+Stools+Benches","Hammocks","Mattresses+Covers","Furniture+Miscellaneous","Candles+Candle+Holders","Lamps","Lights+Accessories","Lights+Seasonal","Thermostats+Thermometers"];

		$("#household").html('');
		
		len = subcatHouseHed.length;
		for (var i=0; i<len; i+=2) {
			if (i+1 < len) {
				$("#household").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHouseJSON[i] + '" data-toggle="modal">' + subcatHouseHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHouseJSON[i+1] + '" data-toggle="modal">' + subcatHouseHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#household").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHouseJSON[i] + '" data-toggle="modal">' + subcatHouseHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}

/* KITCHEN PRODUCTS */

subcatKitchenHed =["Blenders","Coffeemakers/Coffeepots/Teapots/Kettles","Cookers & Cookware","Dishwashers","Espresso/Cappuccino Makers ","Food Dehydrator/Preserver/Processor ","Freezers ","Ovens/Stoves/Ranges/Microwaves","Refrigerators ","Toasters/Toaster Ovens ","Bottles (Sports/Water/Thermos)","Bowls ","Carafes/Jars ","Dishes/Glassware/Eating Utensils ","Food Carriers","Knives/Cutters/Blades/Sheaths"];

subcatKitchenJSON = ["Blenders","Coffeemakers+Teapots","Cookers+Cookware","Dishwashers","Espresso+Cappuccino+Makers","Food+Dehydrator+Processor","Freezers","Ovens+Stoves+Microwaves","Refrigerators","Toasters+Toaster+Ovens","Bottles+Sports+Water","Bowls","Carafes+Jars","Dishes+Glassware+Utensils","Food+Carriers","Knives+Cutters"];

		$("#kitchen").html('');
		
		len = subcatKitchenHed.length;
		//console.log(len);
		for (var i=0; i<len; i+=2) {
			if (i+1 < len) {
				$("#kitchen").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatKitchenJSON[i] + '" data-toggle="modal">' + subcatKitchenHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatKitchenJSON[i+1] + '" data-toggle="modal">' + subcatKitchenHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#kitchen").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatKitchenJSON[i] + '" data-toggle="modal">' + subcatKitchenHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}

/* ELECTRONICS PRODUCTS */

subcatElectronicsHed = ["Air Cleaners/Purifiers","Dehumidifiers","Dryers","Electric Heaters","Furnaces","Gas Water Heaters & Accessories","Heat Pumps / Heating/Cooling Units","Washing Machines","Gas Control Valves","Adapter/Power Supply/Charger/Battery","Data cable","Extension Cords/Power Strips/Surge Protectors","Switches","Audio/Video Systems & Accessories","Cameras & Accessories","Computer Equipment","Fans","Radios & Music Players","Speakers","Televisions, Mounts, Guards & Antennas","Telephones, Cell Phones & Accessories"];

subcatElectronicsJSON = ["Air+Cleaners+Purifiers","Dehumidifiers","Dryers","Electric+Heaters","Furnaces","Gas+Water+Heaters","Heating+Cooling+Units","Washing+Machines","Gas+Control+Valves","Adapter+Power+Supply","Data+cable","Extension+Cords+Power+Strips","Switches","Audio+Video+Systems","Cameras+Accessories","Computer+Equipment","Fans","Radios+Music+Players","Speakers","Televisions+Mounts+Antennas","Telephones+Cell+Phones"];

		$("#electronics").html('');
		
		len = subcatElectronicsHed.length;
		//console.log("subcatElectronicsHed length: " + len);
		for (var i=0; i<len; i+=2) {
			if (i+1 < len) {
				$("#electronics").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatElectronicsJSON[i] + '" data-toggle="modal">' + subcatElectronicsHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatElectronicsJSON[i+1] + '" data-toggle="modal">' + subcatElectronicsHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#electronics").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatElectronicsJSON[i] + '" data-toggle="modal">' + subcatElectronicsHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}


/* HOME IMPROVEMENT PRODUCTS */

subcatHomeimprovHed = ["Gas/Propane Cans/Cylinders/Tanks/Fuel","Generators","Grills, Smokers & Accessories","Blowers","Mowers & Accessories","Tractors","Weed Trimmers","Paint & Coating Items","Drills & Bits","Air Compressors","Chain Saws","Circular Saws","Miter Saws","Nailers","Snow Blowers & Throwers"];

subcatHomeimprovJSON = ["Gas+Propane+Tanks","Generators","Grills+Smokers","Blowers","Mowers+Accessories","Tractors","Weed+Trimmers","Paint+Coating+Items","Drills+Bits","Air+Compressors","Chain+Saws","Circular+Saws","Miter+Saws","Nailers","Snow+Blowers"];

		$("#home-improv").html('');
		
		len = subcatHomeimprovHed.length;
		//console.log("subcatHomeimprovHed length: " + len);
		for (var i=0; i<len; i+=2) {
			if (i+1 < len) {
				$("#home-improv").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHomeimprovJSON[i] + '" data-toggle="modal">' + subcatHomeimprovHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHomeimprovJSON[i+1] + '" data-toggle="modal">' + subcatHomeimprovHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#home-improv").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatHomeimprovJSON[i] + '" data-toggle="modal">' + subcatHomeimprovHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}

/* FITNESS & RECREATION PRODUCTS */

subcatFitnessHed = ["Backpacks/Bags","Exercise Machines/Equipment","Helmets & Helmet Accessories","Air Rifles/Air Guns/BB Guns & Accessories","Gun Accessories","Hunting Accessories","Tents & Canopies","Trampolines","All Terrain Vehicles (ATVs)","Motorcycles/Dirt Bikes (Off-Road) & Accessories","Scooters / Mini bikes","Snowmobiles","Utility, Off-Road Vehicles/Golf Carts","Baseball/Softball Accessories","Bicycles & Accessories","Climbing Equipment","Scuba Diving/Water Activity Equipment","Sports Equipment & Accessories","Skiing/Snowboarding","Swimming Pool Items"];


subcatFitnessJSON = ["Backpacks+Bags","Exercise+Machines","Helmets+Helmet","Air+Rifles+BB+Guns","Gun+Accessories","Hunting+Accessories","Tents+Canopies","Trampolines","All+Terrain+Vehicles","Motorcycles+Dirt+Bikes","Scooters+Mini+bikes","Snowmobiles","Utility+Off-Road+Vehicles","Baseball+Softball","Bicycles+Accessories","Climbing+Equipment","Scuba+Diving+Water+Activity","Sports+Equipment+Accessories","Skiing+Snowboarding","Swimming+Pool+Items"];

		$("#fitness").html('');
		
		len = subcatFitnessHed.length;
		//console.log("subcatFitnessHed length: " + len);
		for (var i=0; i<len; i+=2) {
			
			if (i+1 < len) {
				$("#fitness").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatFitnessJSON[i] + '" data-toggle="modal">' + subcatFitnessHed[i] + '</a></p></td><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatFitnessJSON[i+1] + '" data-toggle="modal">' + subcatFitnessHed[i+1] + '</a></p></td></tr>');
			} else {
				$("#fitness").append('<tr><td><p class="more showmethemodal"><a href="#recallModal" role="button" class="subcat" data-recall="'+ subcatFitnessJSON[i] + '" data-toggle="modal">' + subcatFitnessHed[i] + '</a></p></td><td><p class="more showmethemodal">&nbsp;</p></td></tr>');
	  		}
		}


/* DYNAMICALLY GENERATED MODALS begin */

	$(".showmethemodal").click(function () {
			
		jsonfile = $(this).find('a').attr("data-recall");
		
		subcatName = $(this).find('a').text();
		
		$("#myModalLabel").html(subcatName);
	
		$.getJSON('data/' + jsonfile + '.json', function(data) {
			  
			len = data.success.results.length;
			
			$("#recallMcontent").html('');
			
			for (var i=0; i<len; i++) {
				
				// check here if there are multiple products
				prodno = data.success.results[i].descriptions.length;
				
				if (prodno > 1 ) {
				
					console.log("index " + i + "has " + prodno + " products!");
					
					$("#recallMcontent").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + prodno + ' products are listed in the recall notification</a>. Hazard: ' + data.success.results[i].hazards + '. </p><div>');
					
				} else {
				
					$("#recallMcontent").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].descriptions[0] + '</a>. Hazard: ' + data.success.results[i].hazards + '. </p></div>');
				}
			}
		  
		});	
	
	});
	
	$(".fda-showmethemodal").click(function () {
			
		jsonfile = $(this).find('a').attr("data-recall");
		
		subcatName = $(this).find('a').text();
		
		$("#myModalLabel").html(subcatName);
	
		$.getJSON('data/' + jsonfile + '.json', function(data) {
			  
			len = data.success.results.length;
			
			$("#recallMcontent").html('');
			
			for (var i=0; i<len; i++) {
				
				// check here if there are multiple products
			
				$("#recallMcontent").append('<div class="indivCon"><p class="dateStamp">Recall date: ' + moment(data.success.results[i].recall_date).format('MMMM D, YYYY')  + '</p><p class="excerpt"><a href="http://www.fda.gov' + data.success.results[i].recall_url + '" target="_blank">' + data.success.results[i].prodname + '</a>, ' + data.success.results[i].description + '. Hazard: ' + data.success.results[i].reason + '. </p></div>');
			}
		  
		});	
	
	});

/* DYNAMICALLY GENERATED MODALS end */


}); // end document.ready block


