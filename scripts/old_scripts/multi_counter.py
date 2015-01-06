#!/usr/bin/env python
"""
fetches recalls from API back to 2008 and counts how many have multiple entries
"""
import urllib
import json

######## Loop of all CPSC recall categories to JSON ######

totalcount = 0
multicount = 0

for i in range(1,21): 
	print i
	URL = 'http://api.usa.gov/recalls/search.json?organization=cpsc&start_date=2008-06-11&per_page=50&page='+ str(i) + '&sort=date'
	web_cnx = urllib.urlopen(URL)
	recalls = web_cnx.read()
	rjson = json.loads(recalls)
	print rjson['success']['results'][0]['recall_date']

	#rlen = len(rjson['success']['results'])
	#print rlen
	for j in range(0,50):
		#print rjson['success']['results'][j]['descriptions']
		totalcount += 1
		print totalcount
		if rjson['success']['results'][j]['descriptions']:
			if len(rjson['success']['results'][j]['descriptions']) > 1:
				multicount += 1
				print 'multicount: ' + str(multicount)
	
	
	
	
	# write to file
	#text_file = open("multitest.json", "w")
	#text_file.write(rjson)
	#text_file.close()
