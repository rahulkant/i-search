from urllib.request import urlopen
from linkFinder import linkFinder
from mkdirectory import *
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


class spider:

    # class variables shared among all instances
	projectName = ''
	baseURL = ''
	domainName= ''
	queueFile = ''
	crawledFile = ''
	notLinksFile = ''
	cannotOpenFile = ''
	queue = set()
	crawled = set()
	notLinks = set()
	cannotOpen = set()
	

	def __init__(self,projectName,baseURL,domainName):
		spider.projectName = projectName
		spider.baseURL = baseURL
		spider.domainName = domainName
		spider.queueFile = spider.projectName + '/queue.txt'
		spider.crawledFile = spider.projectName + '/crawled.txt'
		spider.notLinksFile = spider.projectName + '/notLinks.txt'
		spider.cannotOpenFile = spider.projectName + '/cannotOpen.txt'
		
		self.boot()
		self.crawlPage('First Spider',spider.baseURL)

	@staticmethod
	def boot():
        	createProjectDir(spider.projectName)
       		createDataFiles(spider.projectName, spider.baseURL)
        	spider.queue=fileToSet(spider.queueFile)
        	spider.crawled=fileToSet(spider.crawledFile)
        	spider.notLinks = fileToSet(spider.notLinksFile)
        	spider.cannotOpen = fileToSet(spider.cannotOpenFile)

	@staticmethod
	def crawlPage(threadName,pageURL):
		ignore = ["calendar","events","mailto","day","month","year","webmail"]
		i=0
		for item in ignore:
			if item in pageURL.lower():
				i += 1
				#print (i)
		if (i==0) and (pageURL not in spider.crawled):
			print(threadName+' crawling '+pageURL)
			print('Queue '+str(len(spider.queue))+' | Crawled '+ str(len(spider.crawled)))
			spider.addLinksToQueue(spider.gatherLinks(pageURL))
			spider.queue.remove(pageURL)
			spider.crawled.add(pageURL)
			spider.updateFiles()

	@staticmethod
	def gatherLinks(pageURL):
		htmlString = ''
		try:
			response = urlopen(pageURL)
            		#print (response.getheader('Content-Type'))
			if 'text/html' in response.getheader('Content-Type'):
				htmlBytes = response.read()
                #print('a')
				htmlString = htmlBytes.decode('utf-8')
                #print('d')
			finder = linkFinder(spider.baseURL,pageURL)
			finder.feed(htmlString)

		except:
			try:
				response=urlopen(pageURL)
				if 'text/html' in response.getheader('Content-Type'):
					htmlBytes = response.read()
					htmlString = htmlBytes.decode('iso-8859-1')
				finder = linkFinder(spider.baseURL,pageURL)
				finder.feed(htmlString)
			except Exception as e:
				try:
					response = urlopen(pageURL)
					blah = response.getheader("Content-Type") +' ' +  pageURL
					spider.notLinks.add(blah)
					return set()
				except:
					print(e)
					print('Cannot open '+ pageURL)
					asd = str(e) + ' ' + pageURL
					spider.cannotOpen.add(asd)
					return set()
		return finder.pageLinks()


	@staticmethod
	def addLinksToQueue(linkSet):
		for url in linkSet:
			if url in spider.queue:
				continue
			if url in spider.crawled:
				continue
			if url in spider.notLinks:
				continue
			if url in spider.cannotOpen:
				continue
			if spider.domainName not in url:
				continue
			spider.queue.add(url)

	@staticmethod
	def updateFiles():
		setToFile(spider.queue,spider.queueFile)
		setToFile(spider.crawled,spider.crawledFile)
		setToFile(spider.notLinks,spider.notLinksFile)
		setToFile(spider.cannotOpen,spider.cannotOpenFile)
