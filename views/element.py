from flask import Flask, render_template, request

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'very secret key'


element_context = {
    'hooli': 'hoo'
}


@app.route('/elements/_', methods=['GET'])
def element():
    return render_template('info.html', context=element_context)


@app.route('/elements/_/plusUltra', methods=['GET'])
def element_plus_ultra():
    try:
        key = request.args['title']
        value = request.args['description']

        element_context[key] = value
    except:
        pass
    return render_template('ainfo.html', context=element_context)

elements = [
    {
        'img': 'http://localhost:5000/static/rosemary.jpg',
        'title': 'Rosemary',
        'quantity': '3 drops of essential oil',
        'description': 'this material helps to improve blood circulation so more foods for hair more hair on scalp',
    },
    {
        'img': 'http://localhost:5000/static/lavender.jpg',
        'title': 'Lavender',
        'quantity': '5 drops of essential oil',
        'description': 'this material helps to improve blood circulation so more foods for hair more hair on scalp',
    },
    {
        'img': 'http://localhost:5000/static/chamomilla.jpg',
        'title': 'rosemary',
        'quantity': '3 drops of essential oil',
        'description': 'this material helps to improve blood circulation so more foods for hair more hair on scalp',
    },
    {
        'img': 'http://localhost:5000/static/rosemary.jpg',
        'title': 'rosemary',
        'quantity': '3 drops of essential oil',
        'description': 'this material helps to improve blood circulation so more foods for hair more hair on scalp',
    },
]


@app.route('/components/_', methods=['GET'])
def component():
    return render_template('info.html', context=element_context, elements=elements)


@app.route('/components/_/plusUltra', methods=['GET'])
def component_plus_ultra():
    try:
        key = request.args['title']
        value = request.args['description']

        element_context[key] = value
    except:
        pass
    return render_template('ainfo.html', context=element_context, elements=elements)


if __name__ == '__main__':
    app.run()