from urllib.parse import urlparse

# Get domain name (example.com)
def getDomainName(url):
    try:
        results = getSubDomainName(url).split('.')
        return results[-3]+'.'+results[-2]+'.'+results[-1]
    except:
        return ''

# Get sub domain name (mail.name.example.com)
def getSubDomainName(url):
    try:
        return urlparse(url).netloc
    except:
        return ''

