from flask import Flask
app = Flask(__name__, template_folder='../templates', static_folder='../static')

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'very secret key'

from config import db, fs
articles = db['articles']
components = db['components']
elements = db['elements']
hows = db['hows']
comments = db['comments']

from views import component, element
from views import how
from views import collection
