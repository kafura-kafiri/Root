from flask import Flask, render_template, request, make_response
from pymongo import MongoClient
import gridfs
from bin.script import articlate
import ast
import socket
from bson import ObjectId

client = MongoClient()
DB = client['dr_says']
articles = DB['articles']
IMG = client['dr_says_img']
fs = gridfs.GridFS(IMG)


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('bang_bang_new.html', **{})


if __name__ == '__main__':
    app.run(debug=True)