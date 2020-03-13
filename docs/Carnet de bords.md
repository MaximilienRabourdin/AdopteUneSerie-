# Carnet de bord

## Mardi 25 février 2020 - Sprint 0

Rédaction du cahier des charges. Détermination des rôles au sein du projet. Début de la création d'un wireframe par membre d'équipe sur le temps de travail personnel et mise en commun prévue demain.

### Informations individuelles

Pas d'informations individuelles : travail en groupe complet.

## Mercredi 26 février 2020 - Sprint 0

Nous avons continué la finalisation du sprint 0. 
Réunion avec l'équipe O'Clock afin de faire le point sur l'avancement du cahier des charges. Quelques conseils ont été donnés : 
- Pour la page des mentions légales, il serait bien de préciser que le projet est dans un cadre étudiant et non lucratif, que l'on utilise telle ou telle API.
- Les Wireframes ont besoin d'être un peu plus commentés, notamment sur l'utilité des boutons
- Côté fonctionnalité, la partie commentaires des séries serait un gros plus, pas forcément compliqué à mettre en place, cela permet de montrer ce que l'on sait faire lors du TP : sécurisation des entrées utilisateurs notamment. Penser peut-être à mettre en place une intéraction utilisateurs : ajout d'amis, partager des séries intéressantes.
- Côté exploitation des données, il faut privilégier l'utilisation de l'API puisque les résultats sont complets plutôt que de "perdre" du temps avec la partie algorithmie. 
- Le MCD a besoin d'être plus poussé, avec notamment la création de plusieurs autres entités qui permettrait de diversifier le tri des séries (acteurs, pays, genres ...) et d'aléger l'entité Série
- Utilisation du bundle Symfony Easy Admin

## Informations individuelles

- Team Front : 
    - Création du Flowchart (Arborescence de l'application)
- Team Back :
    - Création du MCD
    - Création du dico de données


## Jeudi 27 février 2020 - Sprint 0

Nous avons repris le MCD, le dico de données ainsi que les wireframes en suivant les conseils de l'équipe O'Clock.
Concernant le MCD, nous l'avons complexifié afin de permettre une recherche plus ciblée.
Retour de Charles concernant le sprint 0, MCD a préciser et Wireframes à uniformiser

## Informations individuelles

- Team Front : 
    - Modification des wireframes
- Team Back :
    - Modification du MCD
    - Modification du dico de données

## Vendredi 28 février 2020 - Sprint 0

Nous avons finalisé le sprint 0 : uniformiser les wireframes, finaliser le MCD (reprise des cardinalitées) et demandé un retour à Charles.
Création des branches pour chaque partie du projet.

## Informations individuelles

- Team Front : 
    - Début de création du projet 
- Team Back :
    - Création du projet Symfony => création des entités, de la base de données.

## Lundi 2 mars 2020 - Sprint 0

Nous avons repris les derniers documents de conception sous les conseils de Charles : MCD, dico de données à préciser. 
Début de réfléxion autour du thème visuel à adopter sur le site. 

## Informations individuelles

- Team Front : 
    - 
- Team Back :
    - MCD terminé, création des entités, des relationships entre entités, connexion à l'API "The Movie DB"

## Mardi 3 mars 2020 - Sprint 0

Nous avons passé en revue les documents du sprint 0 et nous avons présenté le projet et son avancement en cockpit

## Informations individuelles

- Team Front : 

- Team Back :


## Mercredi 4 mars 2020 - Sprint 1

Nous avons continué le développement de notre application. La décision a été prise de se concentrer sur la page d'accueil afin d'avoir quelque chose de concret à présenter Mardi 10 mars pour le point de situation du sprint 1. Le déploiement a été fixé à vendredi. 

## Informations individuelles

- Team Front : 
    - finition du header mobile et avancement du header desktop (95%) + correction de bug.
    - tentative de finaliser le footer pour le mobile et le desktop car pas encore reussi, objectif trouver les erreurs et reussir a finaliser ça 
- Team Back :
    - Routes de l'API terminées, début de l'envoie de données en JSON, reflexion faite autour d'API Platform, qui nous permettrait de gérer notre API de la meilleure manière.

## Jeudi 5 mars 2020 - Sprint 1

Nous avons continué la page d'accueil afin de pouvoir la présenter lors de la fin du sprint 1.

- Team Front : 
    - 
- Team Back : 
    - Début de l'installation d'un bundle pour l'authentification par l'API
    - Finalisation des routes de l'API avec les paramètres envoyés par le front

## Vendredi 6 mars 2020 - Sprint 1

Nous avons finalisé la page d'accueil ainsi que l'affichage des séries avec un tableau transmis au front en attendant la liaison avec l'API

- Team Front : 
    - 
- Team Back : 
    - Finalisation de l'envoie de données par l'API
    - Problème d'ajout de données dans les entités réglé.

## Lundi 9 mars 2020 - Sprint 1

- Team Back : 
    - Résolution de problème pour le déploiement de la partie API de l'application. 
    - Configuration du VirtualHost pour cibler le projet

- Team :
    Problème de déploiement avec le bundle `deployer`, changement de méthode pour un simple git clone côté déploiement.

## Mardi 10 mars 2020 - Sprint 2

- Team Back : 
    - Gestion d'un problème de route et tentative de création d'un token avec JWT Token.

- Team :
- Impossible de créer un token, tentative d'utiliser une autre technique que JWT Token sans succès. 


## Mercredi 11 mars 2020 - Sprint 2

- Team Back : 
    - Résolution du problème de création de token avec JWT Token Bundle
    - Gestion de la création d'un utilisateur grâce à json_decode.
    - Création des contraintes de champs de l'entité user. 
    - Modification de la route `standard` afin d'accépter des données en json.

- Team :
    - Difficulté pour créer un token, solution apportée : reprise du tutoriel de configuration de JWT token et ça a fonctionné.

## Jeudi 12 mars 2020 - Sprint 2

- Team Back : 

    - Mise en place de la route d'oubli de mot de passe grâce à l'envoi d'un mail => installation du mailer de symfony ainsi que du google mailer. Fonctionnement de la route : envoie d'un mot de passe généré aléatoirement puis assigné à l'utilisateur par mail.
    - Mise en place de la route de modification de mot de passe pour un utilisateur connecté (nécessité d'envoyer le token lors de la requête)
    - Mise en place de la soumission du formulaire de création d'un utilisateur avec les données reçues du front
    - Tentative de récupération des erreurs liées aux contraintes du formulaire de création d'utilisateurs 

- Team :
    - Route création nouvel utilisateur et connexion ne fonctionnent pas lorsqu'appellées par le front => problème de CORS, tentative de résolution en ajoutant manuellement les headers aux responses mais problème au niveau de la route de génération du token puisqu'on ne la gère pas directement.

## Vendredi 13 mars 2020 - Sprint 2

- Team Back : 
    - Modification des réglages du mailer pour le fonctionnement de l'envoie de mail lorsque le projet est déployé.
    - Nouvelle tentative de récupérer les erreurs du formulaire  pour un nouvel utilisateur en changeant la méthode de soumission du formulaire, presque réussi mais il manque encore les erreurs du mot de passe. 
    - Résolution du problème de CORS policy grâce à l'installation de Nelmios CORS bundle. Les routes front/back fonctionnent donc toutes.

- Team :
    - Impossible de récupérer les erreurs du mot de passe => mise en place d'un champs "plain_password" afin de faire la validation sur un mot de passe non hashé mais toujours bloqué.




