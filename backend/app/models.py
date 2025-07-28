# MongoDB models (using PyMongo)
from bson import ObjectId

def discount_collection(db):
    return db['discounts']

def item_collection(db):
    return db['items']

def user_collection(db):
    return db['users']
