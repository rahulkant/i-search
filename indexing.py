import os , os.path
import sys
import urllib.request
import urllib.request
import ssl
from bs4 import BeautifulSoup
from whoosh import fields, index
from whoosh.analysis import StemmingAnalyzer, CharsetFilter, StopFilter
from whoosh.support.charset import default_charset, charset_table_to_dict
from whoosh.fields import Schema, TEXT, STORED, ID, BOOLEAN, KEYWORD
import re
from urllib.request import urlopen

import schedule
import time

def indexer():
	charmap = charset_table_to_dict(default_charset)
	my_analyzer = StemmingAnalyzer() | CharsetFilter(charmap) | StopFilter()

	schema = Schema(url=ID(stored=True),
		title=TEXT(stored=True),
		content=TEXT(stored=True, analyzer=my_analyzer, spelling=True),
        	data=STORED,
        	tags=KEYWORD(stored=True),
		extension=TEXT(stored=True))



	if not os.path.exists("everywhere"):
		os.mkdir("everywhere")
	if not os.path.exists("pdf"):
		os.mkdir("pdf")
	if not os.path.exists("doc"):
		os.mkdir("doc")
	if not os.path.exists("tar"):
		os.mkdir("tar")
	if not os.path.exists("jpg"):
		os.mkdir("jpg")
	if not os.path.exists("forms"):
		os.mkdir("forms")

	i_a = index.create_in("everywhere", schema)
	writer_a = i_a.writer()

	i_b = index.create_in("pdf", schema)
	writer_b = i_b.writer()

	i_c = index.create_in("doc", schema)
	writer_c = i_c.writer()

	i_d = index.create_in("tar", schema)
	writer_d = i_d.writer()

	i_e = index.create_in("jpg", schema)
	writer_e = i_e.writer()

	i_f = index.create_in("forms", schema)
	writer_f = i_f.writer()

	ctx = ssl.create_default_context()
	ctx.check_hostname = False
	ctx.verify_mode = ssl.CERT_NONE

	specific = ['.jpg','.exe','.pdf','.doc','.zip','.xls','pptx','docx','r.gz', '.iso', 'jpeg','.gif','.png']
	ignore = ['calendar','events','mailto']
	with open('intranet/crawled.txt', "r") as fp:
		num = 0
		for line in fp:
			num = num + 1
			print ("Extracting link" + str(num))
			line = line.replace('\n','')
			#if line[-4: ] not in specific:
			if all(item not in line.lower() for item in ignore):
				try:	
					if all(item not in line.lower() for item in specific):	
						print (line)	
						html = urlopen(line)
						soup = BeautifulSoup(html, "html.parser")	
					#soup = BeautifulSoup(html, "html.parser")
						for script in soup(["script", "style"]):
							script.extract()
				
						try:
							heading = soup.title.string
						except AttributeError:
							heading = "line"
					#print (str(heading))
						
						try:
							content = soup.body.get_text()
						
						except AttributeError:
							content = ""
					
						tags = ""
						try:
	            					for h in soup.findAll(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7']):
	                					tags = tags + " " + h.string
						except:
	            					pass
					else:
						#pattern = re.compile('[\W_]+')
						heading = line
						#heading = pattern.sub(' ',heading)
						#re.sub(r'[\W_]+','', heading)
						#heading = heading.split()
						content = line.split()
						tags = ""
						
					title = str(heading)
					#print (title)
					tags = str(tags)
					content = str(content)
					#print ("content")
					url = str(line)
					extension = str(line[-4: ])
					writer_a.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
					if "pdf" in line.lower():
						writer_b.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
						print ("added to pdf")
					elif (".doc" in line.lower()) or (".ppt" in line.lower()) or (".xls" in line.lower()) or ("docx" in line.lower()) or (".ppt" in line.lower()):
						writer_c.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
						print("added to doc")
					elif (".exe" in line.lower()) or (".iso" in line.lower()) or (".zip" in line.lower()) or ("r.gz" in line.lower()):
						writer_d.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
						print("added to tar")
					elif (".jpeg" in line.lower()) or (".jpg" in line.lower()) or (".gif" in line.lower()) or (".png" in line.lower()):
						writer_e.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
						print("added to jpg")
					elif "form" in line.lower():
						writer_f.add_document(url=url, title=title, data=content, content=content, tags=tags, extension = extension)
						print("added to form")
					else:
						print ("adding to everywhere")			
					
					#writer_a.add_document(url=url, title=title, data=content, content=content, tags=tags)
					print ("added To whoosh")
				except urllib.error.HTTPError:
					print ("HTTP Error")
					#	test = "True"
				except (ConnectionResetError, urllib.error.URLError):
					print ("Connection Reset Fail")
			else:
				print ("ignored this url")			
		writer_a.commit()
		writer_b.commit()
		writer_c.commit()
		writer_d.commit()
		writer_e.commit()
		writer_f.commit()
	
indexer()

schedule.every().wednesday.at("13:15").do(indexer)
while True:
    schedule.run_pending()
    time.sleep(1)
