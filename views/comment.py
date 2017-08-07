from views import app
from flask import render_template, request, abort, jsonify
from bson import ObjectId
from views import comments
from pymongo import errors
from copy import deepcopy
from ast import literal_eval
import datetime

default = {
    'author': 'matt',
    'date': datetime.datetime.now(),
    'avatar': 'localhost:5000/media/default_avatar.jpg',
    'content': "blah blah blah {% img 'url' %} blah blah {% tag 'tag' 'url' %}",
    'meta': {
        'related': 'default document id'
    }
}


@app.route('/comment')
def comment_instance():
    return jsonify(default)


@app.route('/comments/<id>', methods=['GET'])
def get_comment(id):
    _id = ObjectId(id)
    try:
        _comment = comments.find_one({
            '_id': _id
        })
        return jsonify(_comment)
    except:
        abort(204)


@app.route('/comments/<id>', methods=['POST'])
def set_comment(id):
    _id = ObjectId(id)
    try:
        raw = request.values['json']
        evaluated = literal_eval(raw)
        if type(evaluated) is dict:
            json = evaluated
            _comment = deepcopy(default)
            for key in _comment:
                if key in json:
                    _comment[key] = json[key]
            comments.update_one({'_id': _id}, {
                '$set': _comment
            }, upsert=False)
            abort(200)
        else:
            abort(204)
    except:
        abort(909)


@app.route('/comments/+')
def create_component():
    _comment = deepcopy(default)
    try:
        raw = request.values['json']
        evaluated = literal_eval(raw)
        if type(evaluated) is dict:
            json = evaluated
            _comment = deepcopy(default)
            for key in _comment:
                if key in json:
                    _comment[key] = json[key]
    finally:
        result = comments.insert_one(_comment)


@app.route('/comments/<id>/-')
def del_component(id):
    try:
        comments.delete_one({'_id': ObjectId(id)})
        abort(200)
    except:
        abort(204)
