from views import app
from flask import render_template, request, abort
from bson import ObjectId
from views import components
from pymongo import errors
from copy import deepcopy
from ast import literal_eval

default = {
    'title': 'the legendary component',
    'img': 'localhost:5000/media/default.jpg',
    'context': {},
    'elements': {}
}


@app.route('/components/<id>')
def component_plus_ultra(id):
    _id = ObjectId(id)
    values = request.values
    if 'title' in values and 'description' in values:
        key = request.args['title']
        value = request.args['description']
        set_component(_id, key, value)
    plus_ultra = values['plusUltra'] if 'plusUltra' in values else False
    return get_component(_id, plus_ultra=plus_ultra)


def get_component(_id, plus_ultra=False):
    try:
        _component = components.find_one({
            '_id': _id
        })
        return render_template('leaf/component.html', component = _component, plus_ultra=plus_ultra)
    except:
        abort(204)


def set_component(_id, key, value):
    components.update_one({'_id': _id}, {
        '$inc': {
            'context.%s' % key: value
        }
    }, upsert=False)


@app.route('/components/+')
def create_component():
    _component = deepcopy(default)
    values = request.values
    for key in ['title', 'img', 'context', 'elements']:
        if key in values:
            _component[key] = literal_eval(values[key])
    result = components.insert_one(_component)
    return get_component(result.inserted_id, plus_ultra=True)


@app.route('/components/<id>/-')
def del_component(id):
    try:
        components.delete_one({'_id': ObjectId(id)})
        abort(200)
    except:
        abort(204)
