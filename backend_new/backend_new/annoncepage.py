from flask import Blueprint, render_template
import json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import date
from datetime import datetime
import requests
from bs4 import BeautifulSoup
from flask import jsonify

import re
import json
from extentions import db
from model import (
    Region,
    Lieu,
    ServiceUrgence,
    Transport,
    Horaire,
    Activite,
    client,
    Appreciation,
    GuideTouristique,
    Employe,
    Responsable_central,
    Responsable_regional,
    users,
    client
)
from apiflask import APIBlueprint


annoncepage = APIBlueprint("annoncepage", __name__,
                        static_folder="instance", template_folder="BACKEND_NEW")

cors = CORS(annoncepage, resources={r"/*": {"origins": "*"}})

# ajouter un lieu a la base de donnee
@annoncepage.post('/lieux_add')
def ajouter_lieu():
    data = requests.json 
    nom_lieu = data['nom_lieu']
    description_lieu = data['description_lieu']
    categorie = data['categorie']
    longitude = data['longitude']
    latitude = data['latitude']
    region_nom = data['region_nom']  # Region name
    nom_employe = data['nom_employe']
    prenom_employe = data['prenom_employe']
    email_employe = data['email_employe']

    # Retrieve the region object
    region = Region.query.filter_by(nom_region=region_nom).first()


    # Create the employee instance
    employe = Employe(
        nom_employe=nom_employe,
        prenom_employe=prenom_employe,
        email_employe=email_employe
    )
    
    lieu = Lieu(
        nom_lieu=nom_lieu,
        description_lieu=description_lieu,
        categorie=categorie,
        longitude=longitude,
        latitude=latitude,
        region_id=region.id
    )

    # Associate the employee with the lieu
    employe.lieu = lieu
    db.session.add(employe)
    db.session.add(lieu)
    db.session.commit()
    return ({"lieuAjouter": True})


@annoncepage.route('/lieugetnew/<int:page>', methods=['GET'])
def get_lieu_new(page):
    per_page = 10
    lieux = Lieu.query.order_by(Lieu.id.desc()).paginate(
        page=page, per_page=per_page, error_out=False)
    return jsonify({'lieux': [lieu.to_dict() for lieu in lieux.items], 'lieuxpre': lieux.has_prev, 'lieuxsuiv': lieux.has_next, 'lieuxpage': lieux.page})

champRecherche = {'search': '', 'categorie': '', 'Region': ''}
@annoncepage.post('/recherche')
def champ_recherche():
    global champRecherche
    champRecherche = requests.json
    print(champRecherche)
    return champRecherche

# envoyer les annonces recherchées à l'utilisateur (c'est-à-dire au front)
@annoncepage.get('/rechercheget')
def send_recherche():
    lieux = Lieu.query

    if champRecherche.get("type"):
        lieux = lieux.filter(Lieu.categorie == champRecherche.get("categorie"))

    if champRecherche.get("search"):
        lieux = lieux.join(Region).filter(Region.nom == champRecherche.get("region"))

    lieux = lieux.all()

    return jsonify({'lieux': [lieu.to_dict() for lieu in lieux]})

# envoyer les info d'une annonces avec son id 
@annoncepage.get('/infoAI/<int:lieu_id>')
def get_info_lieu(lieu_id):
    lieu = Lieu.query.get(lieu_id)
    if lieu is None:
        return jsonify({'error': 'Lieu not found'})

    print (lieu.to_dict())
    appreciation_query = db.session.query(Appreciation).filter(Appreciation.lieu_id == lieu_id)
    appreciations = appreciation_query.all()

    appreciation_list = [appreciation_with_client_info(appreciation) for appreciation in appreciations]
    print('apperciate : ', appreciation_list)
    return jsonify({'lieux': lieu.to_dict(), 'appreciations': appreciation_list})


def appreciation_with_client_info(appreciation):
    appreciation_dict = appreciation.to_dict()
    Client = client.query.get(appreciation.client_id)
    if Client is not None:
        appreciation_dict['Client'] = Client.to_dict()
    return appreciation_dict
