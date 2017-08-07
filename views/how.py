from flask import render_template, request, make_response
from views import articles, app, fs
from views.articlate import articlate
from bson import ObjectId

schema = {
    't': 'none = ""',
    'b': 'none = ""',
    'other': 'none existence = none'
}

default = {
        'base': {
            'theme': 'http://localhost:5000/static/theme/yanyin.jpg',
        },
        'meta': {
            'title': 'خواص و فواید انار و آب انارچیست؟ خواص درمانی انار کدام است؟',
            'level_1': 'فصل',
            'level_2': 'بخش',
            'intro': 'انار و دانه‌های یاقوتی آن هزاران سال است، که بعنوان دارو مصرف می‌شود. از خواص و فواید انار می‌توان به اثرات درمانی و بهبود دهنده آن در بیماریهای قلبی، فشارخون بالا و بعضی از انواع سرطان همچون سرطان پروستات اشاره کرد. یکی از آخرین تحقیقات دانشمندان در مورد خواص و فواید انار نتیجه می‌گیرد، که مصرف روزانه یک لیوان آب انار برای مدت دوهفته میزان تستوترون موجود در بزاق را 24 درصد افزایش داده و تاثیراتی هم برروی فشارخون، حال و حوصله، اضطراب و احساسات افراد دارد.'
        },
        'level_1': [
            {
                'title': 'خواص و فواید درمانی انار',
                'index': '۱',
                'level_2': [
                    {
                        'index': '۱',
                        'b': 'انار سرشار از آنتی اکسیدان بوده ',
                        't': ' (حدودا به اندازه چای سبز) و دارای مقادیر زیادی ویتامین C و پتاسیم می‌باشد و هرچند تحقیقات علمی کامل تر و بیشتری لازم است، اما طبق بعضی از تحقیقات ممکن است فواید درمانی زیر را بدنبال داشته باشد:',
                        'tr': [],
                        'li': [
                            'کاهش خطر ابتلا به بیماریهای قلبی',
                            'کاهش خطر سرطان، بخصوص سرطان پروستات و پسطان',
                            'کمک بدرمان اسهال',
                            'کاهش کلسترول خون',
                            'کمک به حفظ وزن مناسب و کاهش وزن',
                            'مفید برای زنان در دوران قاعدگی',
                            'کمک به درمان هموروئید',
                            'جلوگیری از آسیب دیدن سلول‌ها',
                            'کمک به سلامت لثه‌ها',
                            'کمک بدرمان عفونت‌ها',
                        ],
                        'i': 'http://rastineh.ir/wp-content/uploads/2013/12/PomegranateJuice-290x172.jpeg',
                    },
                    {
                        'index': '۲',
                        'b': ':سایر مزایای استفاده از انار و یا آب انار',
                        't': '',
                        'tr': [],
                        'li': [
                            'مصرف روزانه آب انار به کاهش فشارخون می‌تواند کمک کند.',
                            'مصرف روزانه 227 میلی لیتر آب انار بطرز چشم‌گیری پیشرفت سرطان پروستات را کاهش می‌دهد.',
                            'مصرف انار و یا آب انار می‌تواند، جریان خون به قلب را در افراد مبتلا به بیماری عروق کرونر قلب ایسکمیک که در آن خون بخوبی به ماهیچه‌های قلبی نمی‌رسد، بهبود بخشد.',
                            'آنتی اکسیدان های درون انار یا آب آن ممکن است بتواند از ایجاد لخته در خون جلوگیری کند.',
                            'انار یکی از معدود میوه‌هایی است که آب میوه آن به اندازه خود آن خاصیت دارد.',
                        ],
                        'i': 'http://royayema.ir/wp-content/uploads/2015/01/%D8%AE%D9%88%D8%A7%D8%B5-%D8%A7%D9%86%D8%A7%D8%B1.jpg',
                    },
                ]
            },
            {
                'title': 'تداخلات دارویی انار',
                'index': '۲',
                'level_2': [
                    {
                        'index': '۱',
                        'b': ':در هنگام مصرف انار با هریک از داروهای زیر محتاط باشی',
                        't': '',
                        'li': [
                            'کاربامازپین (Tegretol)',
                            'روزوواستاتین (Crestor)',
                            'تولباتامید (Orinase)',
                            'وارفارین (کومادین). مصرف انار با وارفارین ممکن است، اثر و اثرات جانبی وارفارین را افزایش دهد.',
                            'داروهایی که برای فشار خون بالا استفاده می‌شوند. از آنجا که انار خود کاهش دهنده فشارخون است، مصرف انار با این داروها می‌توان باعث افت شدید فشارخون شود.',
                        ],
                        'tr': [],
                        'i': 'http://haraznews.com/wp-content/uploads/2012/10/Picture-236.jpg',
                    },
                ]
            },
            {
                'title': 'ارزش غذایی انار',
                'index': '۳',
                'level_2': [
                    {
                        'index': '۱',
                        'b': ':ارزش غذایی در هر 100 گرم',
                        't': '',
                        'tr': [
                            ['۸۳', 'کالری'],
                            ['۱.۲ گرم', 'چربی'],
                            ['Doe', '۸۰'],
                        ],
                        'li': [],
                    },
                ]
            }
        ]
    }


@app.route('/article')
def hello_world():
    return render_template('extra.html', **context)


@app.route('/article/plus')
def hello_world_plus():
    return render_template('plus.html', **context)


@app.route('/home')
def home():
    return render_template('home.html', **{})


@app.route('/articles/<_id>', methods=['GET'])
def article_get(_id):
    article = articles.find_one({'_id': ObjectId(_id)})
    print(article)
    return render_template('extra.html', **article)


@app.route('/articles/<_id>/plus', methods=['GET'])
def article_get_plus(_id):
    article = articles.find_one({'_id': ObjectId(_id)})
    print('ttt')
    print(article)
    return render_template('plus.html', **article)


@app.route('/articles/plus', methods=['GET'])
def article_plus():
    article = articlate('', {})
    _id = articles.insert_one(article).inserted_id
    return render_template('url.html', **{'_id': _id})

'''
@app.route('/articles', methods=['POST'])
def article_create():
    raw_article = request.args['article']
    try:
        article = ast.literal_eval(raw_article)
        if type(article) is dict:
            result = articles.insert_one(article)
    except SyntaxError:
        pass
    return result.inserted_id'''


@app.route('/articles/<_id>/plus', methods=['POST'])
def article_alter(_id):
    try:
        raw_article = request.files['article'].read()
        raw_article = str(raw_article, encoding='utf-8')
    except:
        raw_article = ''
    article = articles.find_one({'_id': ObjectId(_id)})
    article = articlate(raw_article, article=article)
    print(str(article))
    articles.update(
        {"_id": article['_id']},
        article,
        upsert=True
    )
    return 'halle'


@app.route('/articles/<_id>/plus/<level_1>/<level_2>/', methods=['POST'])
def add_image(_id, level_1, level_2):
    (l1, l2) = (int(level_1) - 1, int(level_2) - 1)
    print(l1, l2)
    article = articles.find_one({'_id': ObjectId(_id)})
    print(str(article))
    level_1 = article['level_1'][l1]
    level_2 = level_1['level_2'][l2]
    raw_img = request.files['image']
    print(raw_img)
    img_id = fs.put(raw_img)
    print(img_id)
    base = 'http://localhost:5000'
    level_2['i'] = base + '/images/' + str(img_id)
    articles.update(
        {"_id": article['_id']},
        article,
        upsert=True
    )
    return 'img added'


@app.route('/images/<_id>')
def image(_id):
    image_binary =  fs.get(ObjectId(_id)).read()
    response = make_response(image_binary)
    response.headers['Content-Type'] = 'image/jpeg'
    #response.headers['Content-Disposition'] = 'attachment; filename=img.jpg'
    return response

if __name__ == '__main__':
    app.run(debug=True)