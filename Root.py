from werkzeug.wsgi import DispatcherMiddleware
from flask import Flask

from media import app as media
from auth import app as auth
from admin import app as admin

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'very secret key'

app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
    '/media':       media,
    '/auth':        auth,
    '/admin':       admin,
    
})

if __name__ == '__main__':
    app.run()