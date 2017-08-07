from werkzeug.wsgi import DispatcherMiddleware
from flask import Flask

from media import app as media
from profile import app as profile
from admin import app as admin
from store import app as store
from views import app as views

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'very secret key'

app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
    '/media':       media,
    '/profiles':    profile,
    '/admin':       admin,
    '/store':       store,
    '/views':       views,
})

if __name__ == '__main__':
    app.run()