import json
from flask import Flask,render_template,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import date
from datetime import datetime
from flask_migrate import Migrate
from annoncepage import annoncepage

from extentions import db
from apiflask import APIFlask


##########################################
import requests
from bs4 import BeautifulSoup
import re
import json


######################################


app =APIFlask(__name__,docs_ui="swagger-ui",docs_path="/doc")
app.register_blueprint(annoncepage,url_prefix="")

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///BaseDedonnee.db'
cors = CORS(app, resources={r"/*": {"origins": "*"}})

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/create_db')
def create_db():
    db.create_all()
    return 'Database created'




with app.app_context():
    db.create_all()

