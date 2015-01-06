#!/usr/bin/env python
"""
scraper for Health Widget FDA recalls:
http://www.fda.gov/AJAX/All/

"""
import urllib
import json
import sys
from BeautifulSoup import BeautifulSoup

fda_list = []

URL = 'http://www.fda.gov/AJAX/All/'

try:
	web_cnx = urllib.urlopen(URL)
	html = web_cnx.read() 
	# sys.exit()
except IOError:
   print "Error: can\'t find file or read data"
   sys.exit()
else:
   print "Written content in the file successfully"

# Parse the HTML into a form that's easy to use
soup = BeautifulSoup(html)

table  = soup.find(id='AllRecalls') 
rows = table.findAll('tr')
headers = rows[0].findAll('th')

# Extract the column names and add them to a list
columns = []
for header in headers:
    columns.append(header.text)

text_file = open("../data/fda_recalls.json", "w")
text_file.write('{"success":{"total":24808,"results":')

for row in rows[1:]:
    # Extract data points from the table row
    data = row.findAll('td')
    # Pluck out the text of each field and store in a separate variable
    recall_date = data[0].text
    prodname = data[1].text
    prodname = prodname.replace("&nbsp;","")
    recall_url = data[1].find('a')['href']
    description = data[2].text
    description = description.replace("&nbsp;","")
    reason = data[3].text
    company = data[4].text
    
    #drop into dictionary
    fda_list.append({'recall_date':recall_date,'prodname':prodname,'recall_url':recall_url,'description':description,'reason':reason,'company':company})

#turn into json object and write to file
print>>text_file,json.dumps(fda_list)

text_file.write('}}')
text_file.close()
