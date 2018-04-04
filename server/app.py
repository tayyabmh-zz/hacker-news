from flask import Flask, jsonify
import requests
import json

app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello():
	r = requests.get('https://hacker-news.firebaseio.com/v0/item/8863.json')
	return jsonify(r.json())
