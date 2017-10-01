import os

# Each website is a separate folder
def createProjectDir(directory):
    if not os.path.exists(directory):
        print('Project '+ directory +' created')
        os.makedirs(directory)

# Create queue and crawled files
def createDataFiles(projectName,baseURL):
    queue = projectName + '/queue.txt'
    crawled = projectName + '/crawled.txt'
    notLinks = projectName + '/notLinks.txt'
    cannotOpen = projectName + '/cannotOpen.txt'

    if not os.path.isfile(queue):
        writeFile(queue,baseURL)

    if not os.path.isfile(crawled):
        writeFile(crawled,'')

    if not os.path.isfile(notLinks):
        writeFile(notLinks,'')

    if not os.path.isfile(cannotOpen):
        writeFile(cannotOpen,'')


# Creates a new file
def writeFile(path,data):
    f = open(path,'w')
    f.write(data)
    f.close()

# Append Data to a file
def appendToFile(path,data):
    with open(path,'a') as file:
        file.write(data+'\n')


# Delete contents of file
def deleteFileContent(path):
    with open(path,'w'):
        pass

# Read a file and convert each line to set items
def fileToSet(fileName):
    results = set()
    with open(fileName,'rt') as f:
        for line in f:
            results.add(line.replace('\n',''))
    return results

# Iterate through set, each item will be a new line in file
def setToFile(links, file):
    deleteFileContent(file)
    for link in sorted(links):
        appendToFile(file,link)




