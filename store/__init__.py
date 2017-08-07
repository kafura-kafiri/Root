from flask import Flask
app = Flask(__name__)

from config import db
import store.store