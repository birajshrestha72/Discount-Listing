from flask import request, jsonify
from app import app, db
from app.models import discount_collection, item_collection, user_collection
from bson import ObjectId

# Discount endpoints
@app.route('/api/discounts', methods=['GET'])
def get_discounts():
    discounts = list(discount_collection(db).find())
    for d in discounts:
        d['_id'] = str(d['_id'])
    return jsonify(discounts)

@app.route('/api/discounts', methods=['POST'])
def add_discount():
    data = request.json
    result = discount_collection(db).insert_one(data)
    return jsonify({'_id': str(result.inserted_id)}), 201

# Item endpoints
@app.route('/api/items', methods=['GET'])
def get_items():
    items = list(item_collection(db).find())
    for i in items:
        i['_id'] = str(i['_id'])
    return jsonify(items)

@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    result = item_collection(db).insert_one(data)
    return jsonify({'_id': str(result.inserted_id)}), 201

# User endpoints
@app.route('/api/users', methods=['GET'])
def get_users():
    users = list(user_collection(db).find())
    for u in users:
        u['_id'] = str(u['_id'])
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    result = user_collection(db).insert_one(data)
    return jsonify({'_id': str(result.inserted_id)}), 201
