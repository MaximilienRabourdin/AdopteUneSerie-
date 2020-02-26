# Cahier des charges

## Présentation du projet

 - L'idée principal serait de pouvoir proposer des séries en fonction des attentes précises des utilisateurs. 
    De ne plus devoir scroller indéfiniment pendant des heures dans les divers catalogues des plateformes de streaming tel que Netflix pour finalement s'endormir au bout de 5 min de visionnage :).

## Définition des objectifs

Du à la variété considérable des séries que peuvent nous proposer les divers studios de productions, le simple critère de tri par un seul et unique "genre" est beaucoup trop imprécis et réducteur. En effet une série pourrait très bien incorporer une multitude de genres et toucher un public plus large que ne laisserait penser sa catégorie (game of thrones ou breaking bad par exemple).
Les séries ne sont trier habituellement que par genre, cette application proposerais de prendre en compte divers critères supplémentaires.
Cette application pourrait également gérer l'avancé de visionnage des users (inscription requis dans ce cas là) et leur proposer des contenus plus ou moins similaire qui pourrait les intéresser. De plus en option, on pourrait les notifier lors de la sortie de nouveaux épisodes.
Un compteur d'heures de visionnage pourrait également être incorporé, ainsi qu'un compteur d'heures de visionnage restant.
Une page favoris pourrait être créée également.

## Définition du MVP

- Pouvoir trouver une série se basant sur des critères de recherches spécifiques.
- Pouvoir avoir accès à un compte utilisateur recensant les séries suivis.

## Décrire les fonctionnalités (spécifications fonctionnelles)

### Barre de recherches

### Critères de recherches :

- La longueur moyennes des épisodes (format 20 min, 45 min, 1h...)
- Le niveau de complexité du scénario recherché (entre dark et brooklyn 99 par exemple le niveau d'attention requis est radicalement différent)
- Statut terminé ou en cours
- Série qui nécessite un suivi sur le long terme ou juste pour passer la soirée ( Black mirror et Love Death and Robot par exemple proposent des épisodes qui ne se suivent pas et qui sont très différents les uns des autres)
- La tranche d'âge moyenne visée par les créateurs de la série ou restriction d'âge (PG16...)
- Séries proposées par des scénaristes ou réalisateurs de renom tel que pour les séries Westworld (Jonathan Nolan) ou Band of brothers (Spielberg et Tom Hanks)
- Tri par studios de production (HBO, History...)
- Reboot ou pas
- Tri par pays
- Adaptation de livres ou jeux vidéos

### User

- Sign up
- Sign in
- Log out
- Favoris
- Personnalisation et modification du compte utilisateur
- Boutons suivant/précédent
- Bouton de tri 

### Admin 

- Possibilité de modification de la BDD
- Gérer les comptes utilisateurs (super Admin)

## Décrire les rôles de chacun

Product Owner : Farah 

Scrum master : Nicolas H

Lead dev Front : Maximilien

Lead dev Back : Nicolas H

Référent technique Git master : Nicolas B

Référent REACT : Farah

Référent SYMFONY :  Nicolas

## Lister les technos utilisées

- REACT
- SYMFONY (EasyAdmin)

## Décrire la cible 

- Tout public sériephile

## Décrire les potentielles évolutions

- Suivi de visionnage
- Trailer 
- Notification de sortie 
- Recommandation de série similaire
- Possibilité de mettre des commentaires (possible V1)

## Arborescence de l'appli (à faire par Front)

- Whimsical

## Lister les users stories / routes

### Page Accueil

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Visiteur |Une page d'accueil|Visualiser les séries mieux notés| |
| Visiteur |D'une barre de recherche| Trouver une série |Par critères ou directement par nom|
| Visiteur|Accéder à un formulaire d'inscription|Pouvoir m'inscrire| |
| Visiteur |Accéder à un formulaire de connexion|Pouvoir me connecter| |
| Membre |Accéder à mes favoris|Suivre mes séries favorites| |
| Membre |Accéder à mon compte|Le personnaliser / modifier / compléter| |
| Admin |Gérer la BDD|Gérer les utilisateurs, les séries, etc...| |

### Page Série

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Visiteur |Accéder aux infos de la série| | |
| Membre |Savoir si elle fait partie de mes favoris ou pas et pouvoir l'ajouter| | |

### Résultat de la recherche

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Visiteur |Visualiser le résultat de la recherche| | |
| Visiteur |Pouvoir trier la liste des résultats| | |
| Visiteur|Pouvoir choisir l'affichage| |par 10, 20, 100...|
| Membre |Pouvoir ajouter une série en favoris| | |

### Page de Favoris

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Membre |Gérer les favoris|Voir ou supprimer des séries mises en favoris| |

### Page de paramètres

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Membre Modifier mes informations personnelles| | |
| Membre |Ajouter/Modifier/Supprimer mon avatar| | |
| Admin |Visualiser les comptes utilisateurs| | |
| Admin |Gérer les rôles des utilisateurs|

### Page d'inscription

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Visiteur |Rentrer mes informations personnelles|De se connecter| |
| Visiteur |D'indiquer mon mot de passe |De se connecter| |

### Page de connexion

|En tant que ...|J'ai bessoin de ...|Afin de ...|Commentaires|
|-|-|-|-|
| Visiteur |Me connecter à mon compte|Pouvoir ajouter des séries en favoris| |
| Visiteur |Pouvoir demander une réinitialisation du mot de passe|Pouvoir me connecter en cas d'oubli| |

### FAQ

|Questions| 
|-|
| Qu'est ce que c'est ? | 
| Comment utiliser ? | 
| Comment s'inscrire ?  | 
| Comment se désinscrire ? | 
| Comment rajouter une série a mes éléments |

## Wireframes du projet

### Accueil / FAQ 
https://whimsical.com/L8nw9yC7VWqMVWrYuoYKpt

### Resultat recherche / Parametres
https://whimsical.com/4hQAxgnKzzC9BvaygfUoEq

### Inscription / Connexion
https://whimsical.com/VkppVHmbLp7QbHdwHWKwqD

### Séries / Favoris
https://whimsical.com/TADKHpHCV4J9dG7V8iwRTy
