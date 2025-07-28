
# Initialize Flask app
from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection (update URI as needed)
client = MongoClient('mongodb://localhost:27017/')
db = client['discount_db']

from app import routes

name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    services:
      mongo:
        image: mongo:latest
        ports: [27017:27017]
        options: >-
          --health-cmd="mongosh --eval 'db.adminCommand(\"ping\")'"
          --health-interval=10s
          --health-timeout=5s
          --health-retries=5

    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install frontend dependencies
        run: npm install
        working-directory: ./

      - name: Run frontend tests
        run: npm test -- --watchAll=false
        working-directory: ./

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: Install backend dependencies
        run: pip install -r requirements.txt
        working-directory: ./backend

      # Uncomment and add backend tests if you have them
      # - name: Run backend tests
      #   run: pytest
      #   working-directory: ./backend

