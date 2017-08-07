from views import app
from flask import render_template, request, abort
from bson import ObjectId
from views import elements
from pymongo import errors
from copy import deepcopy
from ast import literal_eval

default = {
    'title': 'the legendary element',
    'img': 'localhost:5000/media/default.jpg',
    'context': {},
}


@app.route('/elements/<id>')
def element_plus_ultra(id):
    _id = ObjectId(id)
    values = request.values
    if 'title' in values and 'description' in values:
        key = request.args['title']
        value = request.args['description']
        set_element(_id, key, value)
    plus_ultra = values['plusUltra'] if 'plusUltra' in values else False
    return get_element(_id, plus_ultra=plus_ultra)


def get_element(_id, plus_ultra=False):
    try:
        _element = elements.find_one({
            '_id': _id
        })
        return render_template('leaf/element.html', element=_element, plus_ultra=plus_ultra)
    except:
        abort(204)


def set_element(_id, key, value):
    elements.update_one({'_id': _id}, {
        '$inc': {
            'context.%s' % key: value
        }
    }, upsert=False)


@app.route('/elements/+')
def create_component():
    _element = deepcopy(default)
    values = request.values
    for key in ['title', 'img', 'context', 'elements']:
        if key in values:
            _element[key] = literal_eval(values[key])
    result = elements.insert_one(_element)
    return get_element(result.inserted_id, plus_ultra=True)


@app.route('/elements/<id>/-')
def del_element(id):
    try:
        elements.delete_one({'_id': ObjectId(id)})
        abort(200)
    except:
        abort(204)
