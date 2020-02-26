# Routes

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/` | Accueil | Page d'accueil | GET | MainController | home |  |
| `/login` | Connexion | Formulaire de connexion | POST | MainController | login |  |
| `/sign in` | Inscription | Formulaire d'inscription | POST | MainController | signin |  |
| `/logout` | Déconnexion | Permet de se deconnecter | POST | MainController | logout |  |
| `/search` | Rechercher | Recherche une série | GET | MainController | search |  |
| `/series` | Série | Affiche une série | GET | MainController | series |  |
| `/account` | Mon compte | Affiche le compte de l'utilisateur et les parametres du comptes| GET | MainController | account |  |
| `/faq` | Foire aux questions | Liste des questions | GET | MainController | faq |  |
| `/favories` | Favoris | Liste des séries mise en favoris | GET/POST | MainController | favories |  |
| `/contact` | Contact | Affiche les moyens de contact | GET | MainController | contact |  |
| `/legals` | Mentions légales | Affiche les mentions légales | GET | MainController | legals |  |
| `/cookies` | Préférence cookies | Affiche les préference pour les cookies | GET/POST | MainController | cookies |  |