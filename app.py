from sanic import Sanic
from sanic.response import html
from sanic_ext import render
import os

app = Sanic("Crypt-Maax")

app.static("/static/", "./assets/")
app.config.templating_enable_async = True
app.config.templating_path_to_templates = './templates/'

@app.route('/', methods=['GET'])
async def home(request):
    return await render('home.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)