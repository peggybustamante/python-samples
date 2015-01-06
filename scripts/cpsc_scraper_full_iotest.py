#!/usr/bin/env python
"""
Fetches data from the CPSC API and writes to file for the Recalls widgets and main page
"""
import urllib
import sys

#### CPSC ####
URL = 'http://api.usa.gov/recalls/search.json?organization=cpsc&per_page=50&sort=date'

try:
	web_cnx = urllib.urlopen(URL)
	json = web_cnx.read()
	# sys.exit()
except IOError:
   print "Error: can\'t find file or read data"
   sys.exit()
else:
   print "Written content in the file successfully"

# write to file
text_file = open("../data/cpsc_recalls.json", "w")
text_file.write(json)
text_file.close()

#### NHTSA ####
URL = 'http://api.usa.gov/recalls/search.json?organization=nhtsa&per_page=50&sort=date'
web_cnx = urllib.urlopen(URL)
json = web_cnx.read()
# sys.exit()

# write to file
text_file = open("../data/nhtsa_recalls.json", "w")
text_file.write(json)
text_file.close()

###### BELOW FOR MAIN RECALLS PAGE CATEGORIES ######

######## Loop of all CPSC recall categories to JSON ######
recallCats = ["Pacifiers+Accessories","Sippy+Tumbler+Cups","Baby+Seats+Non-Bath","Infant+Carriers+Slings","Booster+Seats","High+Chairs+Booster+Chairs","Bicycle+Child+Carriers","Furniture+Children","Swings+Baby+Cradle","Bassinets+Baby+Hammocks","Clothing+Children","Baby+Socks","Costume+Childrens+Jewelry","Cribs","Playpens+Play+yards","Strollers+Accessories","Swing+Sets","Rattles","Toy+Animals+Stuffed","Toy+Cars","Toy+Dolls+Accessories","Toy+Miscellaneous","Toy+Musical+Instruments","Toy+Play+Sets+Activity+Sets","Toy+Ride-on","Toy+Vehicles","Toy+Balls","Toy+Figures","Toy+Guns","Toy+Infants+Cribs+Strollers","Toy+Trucks","Toys+Ride-On","Baths+Bath+Accessories","Blankets","Blinds+Shades+Cords","Carbon+Monoxide+Detectors","Cleaners+Cleaning+Products","Clothing+Adults","Shoes+Sandals+Boots","Fireplaces+Accessories","Beds+Cots","Bunk+Beds","Chairs+Stools+Benches","Hammocks","Mattresses+Covers","Furniture+Miscellaneous","Candles+Candle+Holders","Lamps","Lights+Accessories","Lights+Seasonal","Thermostats+Thermometers","Blenders","Coffeemakers+Teapots","Cookers+Cookware","Dishwashers","Espresso+Cappuccino+Makers","Food+Dehydrator+Processor","Freezers","Ovens+Stoves+Microwaves","Refrigerators","Toasters+Toaster+Ovens","Bottles+Sports+Water","Bowls","Carafes+Jars","Dishes+Glassware+Utensils","Food+Carriers","Knives+Cutters","Air+Cleaners+Purifiers","Dehumidifiers","Dryers","Electric+Heaters","Furnaces","Gas+Water+Heaters","Heating+Cooling+Units","Washing+Machines","Gas+Control+Valves","Adapter+Power+Supply","Data+cable","Extension+Cords+Power+Strips","Switches","Audio+Video+Systems","Cameras+Accessories","Computer+Equipment","Fans","Radios+Music+Players","Speakers","Televisions+Mounts+Antennas","Telephones+Cell+Phones","Gas+Propane+Tanks","Generators","Grills+Smokers","Blowers","Mowers+Accessories","Tractors","Weed+Trimmers","Paint+Coating+Items","Drills+Bits","Air+Compressors","Chain+Saws","Circular+Saws","Miter+Saws","Nailers","Snow+Blowers","Backpacks+Bags","Exercise+Machines","Helmets+Helmet","Air+Rifles+BB+Guns","Gun+Accessories","Hunting+Accessories","Tents+Canopies","Trampolines","All+Terrain+Vehicles","Motorcycles+Dirt+Bikes","Scooters+Mini+bikes","Snowmobiles","Utility+Off-Road+Vehicles","Baseball+Softball","Bicycles+Accessories","Climbing+Equipment","Scuba+Diving+Water+Activity","Sports+Equipment+Accessories","Skiing+Snowboarding","Swimming+Pool+Items"]


for cat in recallCats:
	URL = 'http://api.usa.gov/recalls/search.json?organization=cpsc&query=' + cat + '&per_page=50&sort=date'
	# print URL
	web_cnx = urllib.urlopen(URL)
	json = web_cnx.read()
	# sys.exit()
	
	# write to file
	text_file = open("../data/" + cat + ".json", "w")
	text_file.write(json)
	text_file.close()
