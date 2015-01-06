#!/usr/bin/env python
"""
Fetches data from the CPSC API and writes to file for the Recalls widgets and main page
"""
import urllib

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
