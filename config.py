from pymongo import MongoClient
from gridfs import GridFS
client = MongoClient('localhost:27017')
db = client['Root']
fs = GridFS(client['RootFS'])