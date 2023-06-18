from extentions import db
import json

# modezl de la base de donne des utlisateur 
class users(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    admin = db.Column(db.Boolean(), default=False, nullable=False)
    nom = db.Column(db.String(length=50), nullable=False)
    prenom = db.Column(db.String(length=50), nullable=False)
    adresse = db.Column(db.String(length=150), nullable=False)
    email = db.Column(db.String(length=50), nullable=False)
    numerpTlf = db.Column(db.String(length=50), nullable=False)
    annonces = db.Column(db.JSON)
    messagesEnvoyer = db.Column(db.JSON)
    messagesRecu = db.Column(db.JSON)

    def long(self):
        return {
            'id': self.id,
            'admin': self.admin,
            'nom': self.nom,
            'prenom': self.prenom,
            'adresse': self.adresse,
            'email': self.email,
            'numerpTlf': self.numerpTlf,
            'annonces': self.annonces,  # liste des id
            'messagesEnvoyer': self.messagesEnvoyer,  # liste des msg
            'messagesRecu': self.messagesRecu,  # liste des msg
        }

# base de donne de la messagerie
class Emails(db.Model):
    __tablename__ = 'Emails'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(800), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    Utilisateur_id = db.Column(db.Integer, nullable=False)
    DeposeurAn_id = db.Column(db.Integer, nullable=False)
    annonce_id = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime())

    @property
    def serialize(self):
        return {
            'id': self.id,
            'subject': self.subject,
            'content': self.content,
            'Userid': self.Utilisateur_id,
            'deposid': self.DeposeurAn_id,
            'annonceid': self.annonce_id,
            'date': self.date,

        }

class Region(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom_region = db.Column(db.String(100), nullable=False)
    def to_dict(self):
        return {
            'id': self.id,
            'nom_region': self.nom_region,
        }
        

class Lieu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    region_id = db.Column(db.Integer, db.ForeignKey('region.id'), nullable=False)
    nom_lieu = db.Column(db.String(100), nullable=False)
    description_lieu = db.Column(db.String(500), nullable=False)
    categorie = db.Column(db.String(50), nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    service_urgences = db.relationship('ServiceUrgence', backref='lieu', lazy=True)
    transports = db.relationship('Transport', backref='lieu_transport', lazy=True)
    horaires = db.relationship('Horaire', backref='lieu_hor', lazy=True)
    guides_touristiques = db.relationship('GuideTouristique', backref='lieu_guide', lazy=True)
    evenements = db.relationship('Activite', backref='lieu_activite', lazy=True)
    images = db.relationship('Image', backref='lieu_image', lazy=True)  # Relation un-à-plusieurs avec la classe Image
    videos = db.relationship('Video', backref='lieu_video', lazy=True)  # Relation un-à-plusieurs avec la classe Video

    def to_dict(self):
        return {
            'id': self.id,
            'nom_lieu': self.nom_lieu,
            'description_lieu': self.description_lieu,
            'categorie': self.categorie,
            'longitude': self.longitude,
            'latitude': self.latitude,
            'service_urgences': [service_urgence.to_dict() for service_urgence in self.service_urgences],
            'transports': [transport.to_dict() for transport in self.transports],
            'horaires': [horaire.to_dict() for horaire in self.horaires],
            'guides_touristiques': [guide.to_dict() for guide in self.guides_touristiques],
            'evenements': [evenement.to_dict() for evenement in self.evenements],
            'images': [image.to_dict() for image in self.images],
            'videos': [video.to_dict() for video in self.videos]
        }
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)
    nom_fichier = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(200), nullable=False)
    def to_dict(self):
        return {
            'id': self.id,
            'nom_fichier': self.nom_fichier,
            'url': self.url,
        }
class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)
    nom_fichier = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nom_fichier': self.nom_fichier,
            'url': self.url,
        }




class ServiceUrgence(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom_service = db.Column(db.String(100), nullable=False)
    type_service = db.Column(db.String(50), nullable=False)
    contact = db.Column(db.String(100), nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nom_service': self.nom_service,
            'type_service': self.type_service,
            'contact': self.contact,
            'lieu_id': self.lieu_id
        }

class Transport(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom_transport = db.Column(db.String(100), nullable=False)
    duree = db.Column(db.String(50), nullable=False)
    lieu_depart = db.Column(db.String(100), nullable=False)
    is_ecoresponsable = db.Column(db.Boolean, nullable=False)
    type_transport = db.Column(db.String(50), nullable=False)
    horaires = db.Column(db.String(100), nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nom_transport': self.nom_transport,
            'duree': self.duree,
            'lieu_depart': self.lieu_depart,
            'is_ecoresponsable': self.is_ecoresponsable,
            'type_transport': self.type_transport,
            'horaires': self.horaires,
            'lieu_id': self.lieu_id
        }
        
class Horaire(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jour_semaine = db.Column(db.String(50), nullable=False)
    heure_ouverture = db.Column(db.Time, nullable=False)
    heure_fermeture = db.Column(db.Time, nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'jour_semaine': self.jour_semaine,
            'heure_ouverture': self.heure_ouverture.strftime('%H:%M'),
            'heure_fermeture': self.heure_fermeture.strftime('%H:%M'),
            'lieu_id': self.lieu_id
        }
        
        
class Activite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom_activite = db.Column(db.String(100), nullable=False)
    nombre_visiteurs = db.Column(db.Integer, nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)
    description_evenement = db.Column(db.String(255), nullable=True)
    date_debut = db.Column(db.Date, nullable=True)
    date_fin = db.Column(db.Date, nullable=True)
    gratuite = db.Column(db.Boolean, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'nom_activite': self.nom_activite,
            'nombre_visiteurs': self.nombre_visiteurs,
            'lieu_id': self.lieu_id,
            'description_evenement': self.description_evenement,
            'date_debut': self.date_debut.strftime('%Y-%m-%d') if self.date_debut else None,
            'date_fin': self.date_fin.strftime('%Y-%m-%d') if self.date_fin else None,
            'gratuite': self.gratuite
        }
        
        
class client(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    nom = db.Column(db.String(length=50), nullable=False)
    prenom = db.Column(db.String(length=50), nullable=False)
    adresse = db.Column(db.String(length=150), nullable=False)
    email = db.Column(db.String(length=50), nullable=False)
    numeroTlf = db.Column(db.String(length=50), nullable=False)
    profile_picture = db.Column(db.String(length=100))  # chemin vers l'image 

    def to_dict(self):
        return {
            'id': self.id,
            'nom': self.nom,
            'prenom': self.prenom,
            'adresse': self.adresse,
            'email': self.email,
            'numeroTlf': self.numeroTlf,
            'profile_picture': self.profile_picture 
        }

class Appreciation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    commentaire = db.Column(db.String(500), nullable=False)
    note = db.Column(db.Float, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'commentaire': self.commentaire,
            'note': self.note,
            'client_id': self.client_id,
            'lieu_id': self.lieu_id
        }
class GuideTouristique(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(50), nullable=False)
    prenom = db.Column(db.String(50), nullable=False)
    contact = db.Column(db.String(100), nullable=False)
    jour_debut = db.Column(db.String(20), nullable=False)
    jour_fin = db.Column(db.String(20), nullable=False)
    heure_debut = db.Column(db.String(10), nullable=False)
    heure_fin = db.Column(db.String(10), nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nom': self.nom,
            'prenom': self.prenom,
            'contact': self.contact,
            'jour_debut': self.jour_debut,
            'jour_fin': self.jour_fin,
            'heure_debut': self.heure_debut,
            'heure_fin': self.heure_fin,
            'lieu_id': self.lieu_id
        }
        
class Employe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom_employe = db.Column(db.String(50), nullable=False)
    prenom_employe = db.Column(db.String(50), nullable=False)
    email_employe = db.Column(db.String(50), nullable=False)
    lieu_id = db.Column(db.Integer, db.ForeignKey('lieu.id'), nullable=False)
    lieu = db.relationship('Lieu', backref='employe')
    def to_dict(self):
        return {
            'id': self.id,
            'nom_employe': self.nom_employe,
            'prenom_employe': self.prenom_employe,
            'email_employe': self.email_employe,
            'lieu_id': self.lieu_id
        }
class Responsable_central(db.Model):
    id_admin = db.Column(db.Integer, primary_key=True)
    nom_admin = db.Column(db.String(50), nullable=False)
    prenom_admin = db.Column(db.String(50), nullable=False)
    email_admin = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            'id_admin': self.id_admin,
            'nom_admin': self.nom_admin,
            'prenom_admin': self.prenom_admin,
            'email_admin': self.email_admin
        }
    

class Responsable_regional(db.Model):
    id_admin = db.Column(db.Integer, primary_key=True)
    nom_admin = db.Column(db.String(50), nullable=False)
    prenom_admin = db.Column(db.String(50), nullable=False)
    email_admin = db.Column(db.String(50), nullable=False)
    region_id = db.Column(db.Integer, db.ForeignKey('region.id'), nullable=False)
    region = db.relationship('Region', backref='responsables', lazy=True)

    def to_dict(self):
        return {
            'id_admin': self.id_admin,
            'nom_admin': self.nom_admin,
            'prenom_admin': self.prenom_admin,
            'email_admin': self.email_admin,
            'region_id': self.region_id
        }
