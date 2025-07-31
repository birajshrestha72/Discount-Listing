# Initialize Flask app
from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection (update URI as needed)
client = MongoClient('mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority')
db = client['discount_db']

from app import routes

