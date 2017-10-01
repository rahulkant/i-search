import re
import whoosh.index as index
from whoosh.qparser import MultifieldParser
from whoosh.analysis import StemmingAnalyzer
from inspect import getmembers
from pprint import pprint
from whoosh import scoring
from whoosh import qparser
from whoosh.qparser import QueryParser, OrGroup
import sys
#from whoosh import highlight

#option = int(input("search : \n1. Everywhere\n2. pdf\n3. doc\n4. tar/exe\n5. images\n6. Forms\n"))
#operator = int(input("Query Type:\n1. AND\n2. OR\n3. Phrase\n4. Fuzzy Terms\n"))
#query = input("enter keywords to search:\n")
option = int(sys.argv[1])
operator = int(sys.argv[2])
query = str(sys.argv[3])

#print ("option: "+str(option))
#print ( "operator: "+str(operator))
#print ( "query: " + query)

i_a = index.open_dir("everywhere")
i_b = index.open_dir("pdf")
i_c = index.open_dir("doc")
i_d = index.open_dir("tar")
i_e = index.open_dir("jpg")
i_f = index.open_dir("forms")

#hf = highlight.HtmlFormatter()

if operator == 2:
	#print ("in oper 2")
	og = qparser.OrGroup.factory(0.9)
	q_a = MultifieldParser(["title", "content", "tags","extension","url"], i_a.schema , group = og)
	q_b = MultifieldParser(["title", "content","extension","url"], i_b.schema , group = og)
	q_c = MultifieldParser(["title", "content","extension","url"], i_c.schema, group = og)
	q_d = MultifieldParser(["title", "content","extension","url"], i_d.schema, group = og)
	q_e = MultifieldParser(["title", "content","extension","url"], i_e.schema, group = og)
	q_f = MultifieldParser(["title", "content","extension","url"], i_f.schema, group = og)
elif operator == 4:
	#print ("in oper 4")
	og = qparser.OrGroup.factory(0.9)
	q_a = MultifieldParser(["title", "content", "tags","extension","url"], i_a.schema, group = og)
	q_a.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_a.add_plugin(qparser.FuzzyTermPlugin())
	q_b = MultifieldParser(["title", "content","extension","url"], i_b.schema, group = og)
	q_b.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_b.add_plugin(qparser.FuzzyTermPlugin())
	q_c = MultifieldParser(["title", "content","extension","url"], i_c.schema, group = og)
	q_c.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))	
	q_c.add_plugin(qparser.FuzzyTermPlugin())
	q_d = MultifieldParser(["title", "content","extension","url","url"], i_d.schema, group = og)
	q_d.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_d.add_plugin(qparser.FuzzyTermPlugin())
	q_e = MultifieldParser(["title", "content","extension","url"], i_e.schema, group = og)
	q_e.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_e.add_plugin(qparser.FuzzyTermPlugin())
	q_f = MultifieldParser(["title", "content","extension","url"], i_f.schema, group = og)
	q_f.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_f.add_plugin(qparser.FuzzyTermPlugin())
	
else:
	#print ("in oper else")
	q_a = MultifieldParser(["title", "content", "tags","extension","url"], i_a.schema)
	#q_a.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_b = MultifieldParser(["title", "content","extension","url"], i_b.schema)
	#q_b.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_c = MultifieldParser(["title", "content","extension","url"], i_c.schema)
	#q_c.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))	
	q_d = MultifieldParser(["title", "content","extension","url"], i_d.schema)
	#q_d.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_e = MultifieldParser(["title", "content","extension","url"], i_e.schema)
	#q_e.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))
	q_f = MultifieldParser(["title", "content","extension","url"], i_f.schema)
	#q_f.add_plugin(qparser.SequencePlugin("!(~(?P<slop>[1-9][0-9]*))?"))


if option == 2:
	#print ("in option 2")
	with i_b.searcher(weighting=scoring.TF_IDF()) as searcher:
		
		r = q_b.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: "+ corrected.string)
			if (operator == 4):
				r = q_b.parse(corrected.string)
		result = searcher.search(r, limit = None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")

elif option == 3:
	#print("in option 3")
	with i_c.searcher(weighting=scoring.TF_IDF()) as searcher:
	
		r = q_c.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: "+ corrected.string)
			if (operator == 4):
				r = q_c.parse(corrected.string)
		result = searcher.search(r, limit=None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")

elif option == 4:
	#print ("in option 4")
	with i_d.searcher(weighting=scoring.TF_IDF()) as searcher:
		r = q_d.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: "+ corrected.string)
			if (operator == 4):
				r = q_d.parse(corrected.string)
		result = searcher.search(r, limit = None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")

elif option == 5:
	#print ("in option 5")
	with i_e.searcher(weighting=scoring.TF_IDF()) as searcher:
		r = q_e.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: "+ corrected.string)
			if (operator == 4):
				r = q_e.parse(corrected.string)
		result = searcher.search(r, limit = None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")
	
elif option == 6:
	#print ("in option 6")
	with i_f.searcher(weighting=scoring.TF_IDF()) as searcher:
		r = q_f.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: " + corrected.string)
			if (operator == 4):
				r = q_f.parse(corrected.string)
		result = searcher.search(r, limit = None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")

else:
	#print ("in option else")
	with i_a.searcher(weighting=scoring.TF_IDF()) as searcher:
		r = q_a.parse(query)
		corrected = searcher.correct_query(r, query )
		if corrected.query != r:
			print("Did you mean: " + corrected.string)
			if (operator == 4):
				r = q_a.parse(corrected.string)
		result = searcher.search(r, limit = None)
		#print (str(result))
		for item in result:
			print (item["title"])
			print (item["url"])
			#print(item.highlights("content"))
			#print ("\n")
		print("Top 3 similar documents:")
		for subhit in item.more_like_this("content", top=3):
			print(subhit["title"])
			print(subhit["url"])
			#print ("\n")
		#print ("\n")

		
		#url = re.search(r'(http?://\S+)', str(item))
		#print (url.group(0).replace("',",""))

