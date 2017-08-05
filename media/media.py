# !/usr/bin/env python
# -*- coding: utf-8 -*-

import mimetypes
import requests
from io import BytesIO
from PIL import Image
from flask import send_file
from media import app, fs


def serve_pil_image(pil_img):
    img_io = BytesIO()
    pil_img.save(img_io, 'JPEG', quality=70)
    img_io.seek(0)
    return send_file(img_io, mimetype='image/jpeg')


@app.route('/images/<path:image_url>')
def add_image(image_url):
    print(image_url)
    gridfs_filename = 'example_image.jpg'

    mime_type = mimetypes.guess_type(image_url)[0]
    r = requests.get(image_url, stream=True)

    _id = fs.put(r.raw, contentType=mime_type, filename=gridfs_filename)
    print("created new gridfs file {0} with id {1}".format(gridfs_filename, _id))


@app.route('/get/images/<path:filename>')
def get_image(filename):
    if not fs.exists(filename=filename):
        raise Exception("mongo file does not exist! {0}".format(filename))

    im_stream = fs.get_last_version(filename)
    im = Image.open(im_stream)
    return serve_pil_image(im)
