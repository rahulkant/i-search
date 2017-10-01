from html.parser import HTMLParser
from urllib import parse

class linkFinder(HTMLParser):

	def error(self, message):
		pass

	def __init__(self, baseURL,pageURL):
		super().__init__()
		self.baseURL = baseURL
		self.pageURL = pageURL
		self.links = set()
		

	def handle_starttag(self, tag, attrs):
		
		if tag == 'a':
			for (attribute,value) in attrs:
				if attribute == 'href':
					url = parse.urljoin(self.pageURL,value)
					#link = str(url)
					self.links.add(url)

	def pageLinks(self):
		return self.links

