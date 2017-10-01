import threading
from queue import Queue
from spider import spider
from domain import *
from mkdirectory import *


import schedule
import time

def crawling():
	PROJECT_NAME = 'intranet'
	HOMEPAGE = 'http://intranet.iitg.ernet.in/'
	DOMAIN_NAME = getDomainName(HOMEPAGE)
	QUEUE_FILE = PROJECT_NAME + '/queue.txt'
	CRAWLED_FILE = PROJECT_NAME + '/crawled.txt'
	NOTLINKS_FILE = PROJECT_NAME + '/notLinks.txt'
	CANNOTOPEN_FILE = PROJECT_NAME + '/cannotOpen.txt'

	NUMBER_OF_THREADS = 8

	queue = Queue()
	spider(PROJECT_NAME,HOMEPAGE,DOMAIN_NAME)


# Create worker threads (die when main exits)
	def createWorkers():
    		for _ in range(NUMBER_OF_THREADS):
        		t= threading.Thread(target=work)
        		t.daemon = True
        		t.start()

# Do the next job in queue
	def work():
    		while True:
        		url = queue.get()
        		spider.crawlPage(threading.current_thread().name,url)
        		queue.task_done()


# Each queued link is a new job
	def createJobs():
    		for link in fileToSet(QUEUE_FILE):
        		queue.put(link)
    		queue.join()
    		crawl()

#check if there are links in queue, if so then crawl
	def crawl():
		queuedLinks=fileToSet(QUEUE_FILE)
		if len(queuedLinks)>0:
			print(str(len(queuedLinks))+ ' links in queue')
			createJobs()
	createWorkers()
	crawl()

crawling()

schedule.every().wednesday.at("13:15").do(crawling)
while True:
    schedule.run_pending()
    time.sleep(1)
