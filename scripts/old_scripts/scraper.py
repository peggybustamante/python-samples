#!/usr/bin/env python
"""
Fetches data from the API and writes to file for the Recalls widgets and main page
"""
import urllib

#### FDA ####
# URL of the page we're going to scrape 
URL = 'http://api.usa.gov/recalls/search.json?organization=cdc&per_page=50&sort=date'
# Open a network connection using the "urlopen" method. 
web_cnx = urllib.urlopen(URL)
# Use the network object to download, or "read", the page's HTML
json = web_cnx.read() 
# write to file
text_file = open("../data/fda_recalls.json", "w")
text_file.write(json)
text_file.close()

#### CPSC ####
URL = 'http://api.usa.gov/recalls/search.json?organization=cpsc&per_page=50&sort=date'
web_cnx = urllib.urlopen(URL)
json = web_cnx.read() 
# write to file
text_file = open("../data/cpsc_recalls.json", "w")
text_file.write(json)
text_file.close()

#### NHTSA ####
URL = 'http://api.usa.gov/recalls/search.json?organization=nhtsa&per_page=50&sort=date'
web_cnx = urllib.urlopen(URL)
json = web_cnx.read() 
# write to file
text_file = open("../data/nhtsa_recalls.json", "w")
text_file.write(json)
text_file.close()

###### BELOW FOR MAIN RECALLS PAGE CATEGORIES ######

#### FDA [FOOD] ####
URL = 'http://api.usa.gov/recalls/search.json?organization=cdc&food_type=food&per_page=50&sort=date'
web_cnx = urllib.urlopen(URL)
json = web_cnx.read() 
# write to file
text_file = open("../data/food_recalls.json", "w")
text_file.write(json)
text_file.close()

#### FDA [DRUG] ####
URL = 'http://api.usa.gov/recalls/search.json?organization=cdc&food_type=drug&per_page=50&sort=date'
web_cnx = urllib.urlopen(URL)
json = web_cnx.read() 
# write to file
text_file = open("../data/drug_recalls.json", "w")
text_file.write(json)
text_file.close()


######## Loop of all CPSC recall categories to JSON ######
recallCats = ['toy','bicycle','clothing','chair','light','vehicle','stroller','furniture','electronics','battery']

for cat in recallCats:
	URL = 'http://api.usa.gov/recalls/search.json?organization=cpsc&query=' + cat + '&per_page=50&sort=date'
	web_cnx = urllib.urlopen(URL)
	json = web_cnx.read() 
	# write to file
	text_file = open("../data/" + cat + "_recalls.json", "w")
	text_file.write(json)
	text_file.close()
