# Carnet de bord Nicolas H
Carnet de bord personnel rempli chaque jour

## Mardi 25 février 2020 - Sprint 0

- Création du Trello du projet
- Rédaction du journal de bord d'équipe
- Création d'un wireframe (temps perso), grâce à l'outil Whimsical => page Favoris et Série.

## Mercredi 26 février 2020 - Sprint 0

### Ce que j'ai fait : 

- Création du dictionnaire de données
- Création du MCD
- Réunion avec l'équipe O'Clock afin de nous donner des conseils et de faire un point sur l'avancement du projet

### Ce que je comptais faire :

- Avancer sur la finalisation du sprint 0 : MCD et dico de données

### Difficultés rencontrées et solutions/contournements apportés : 

- Difficulté à trouver une API correspondante à nos attentes => nous avons trouvé 2 API pouvant correspondre : "The Movie DB" ainsi que "TraktAPI"
- MCD manque de complexité : petites modifications à faire au niveau du MCD afin de faciliter une éventuelle modification du projet

## Jeudi 27 février 2020 - Sprint 0

### Ce que j'ai fait : 

- Modification du dictionnaire de données
- Modification du MCD

### Ce que je comptais faire :

### Difficultés rencontrées et solutions/contournements apportés : 

- RAS

## Vendredi 28 février 2020 - Sprint 0

### Ce que j'ai fait : 

- Finalisation du sprint 0 : j'ai repris les cardinalités du MCD, modifié mes wireframes afin qu'elles soient cohérentes avec les autres.
- Démarrage du back-end : installation du projet Symfony, création des entités. 
- Recherche afin de connecter la base de données d'un serveur distant à notre projet

### Ce que je comptais faire :

### Difficultés rencontrées et solutions/contournements apportés : 

- Problème pour la connexion du projet Symfony à une base de données externe. Pas de solutions trouvée pour l'instant.

## Lundi 2 mars 2020 - Sprint 0

### Ce que j'ai fait : 

- MCD terminé, retour positif de l'équie O'Clock. 
- Création des entités
- Création des relationships entre chaque entité
- Connexion à l'API dans un but de test

### Ce que je comptais faire :

### Difficultés rencontrées et solutions/contournements apportés : 


## Mardi 3 mars 2020 - Sprint 0 

### Ce que j'ai fait :

- reprise des relations entre entitées
- Présentation de l'avancement sprint 0 en cockpit

### Ce que je comptais faire : 

### Difficultés rencontrées et solutions/contournements apportés : 

## Mercredi 4 mars 2020 - Sprint 1

### Ce que j'ai fait :

- J'ai continué la récupération des données de l'API ainsi que l'ajout dans mes entités
- Finalisation des routes de l'API
- Début d'envoie en JSON pour permettre la récupération des données par le front

### Ce que je comptais faire : 

- Finir l'envoie en JSON

### Difficultés rencontrées et solutions/contournements apportés : 

Ràs

## Jeudi 5 mars 2020 - Sprint 1

### Ce que j'ai fait :

- J'ai finalisé la conception de l'API pour l'envoie des séries en JSON

### Ce que je comptais faire : 

- 

### Difficultés rencontrées et solutions/contournements apportés : 

Problème d'ajout de données dans la base de données au niveau de la longueur des éléments du dernier épisode diffusé. La solution prise a été de ne récupérer que la date, le numéro de l'épisode et la saison. 
Problème de création des routes de l'API et des paramètres de la route. Solution trouvée : utiliser la Request afin de récupérer les éléments de l'url nécessaires à la requête. 

## Vendredi 6 mars 2020 - Sprint 1

### Ce que j'ai fait :

- l'API d'envoie des données des séries est terminée, les routes ont été complétées et fonctionnent bien. 
- J'ai refais un mappage des relations entre entités pour solutionner le remplissage des tables intermédiaires qui ne se faisait pas. 

### Ce que je comptais faire : 

- Déployer la partie API de l'application afin de pouvoir communiquer avec le back

### Difficultés rencontrées et solutions/contournements apportés : 

Problème avec une propriété de l'entité `cast`, erreur lors de l'ajout en base de données : la propriété `character` est un nom reservé par SQL, ce qui empéchait donc l'éxploitation des données. La propriété a été changée pour le nom `protagonist`.
Problème de mappage entre entités : tout a été repris (presque) à zéro.
Problème de déploiement avec Deployer : aucune solution pour le moment, une issue a été ouverte

## Lundi 9 mars 2020 - Sprint 1

### Ce que j'ai fait :

- Résolution de problème pour le déploiement de la partie API de l'application. 
- Configuration du VirtualHost pour cibler le projet

### Ce que je comptais faire : 


### Difficultés rencontrées et solutions/contournements apportés : 

Problème de déploiement avec le bundle `deployer`, changement de méthode pour un simple git clone côté déploiement.

## Mardi 10 mars 2020 - Sprint 2

### Ce que j'ai fait :

- Gestion d'un problème de route et tentative de création d'un token avec JWT Token.

### Ce que je comptais faire : 

- Réussir à créer un token pour l'authentification utilisateur

### Difficultés rencontrées et solutions/contournements apportés : 

- Impossible de créer un token, tentative d'utiliser une autre technique que JWT Token sans succès. 


## Mercredi 11 mars 2020 - Sprint 2

### Ce que j'ai fait :

- Résolution du problème de création de token avec JWT Token Bundle
- Gestion de la création d'un utilisateur grâce à json_decode.
- Création des contraintes de champs de l'entité user. 
- Modification de la route `standard` afin d'accépter des données en json.

### Ce que je comptais faire : 

- 

### Difficultés rencontrées et solutions/contournements apportés : 

- Difficulté pour créer un token, solution apportée : reprise du tutoriel de configuration de JWT token et ça a fonctionné.

## Jeudi 12 mars 2020 - Sprint 2

### Ce que j'ai fait :

- Mise en place de la route d'oubli de mot de passe grâce à l'envoi d'un mail => installation du mailer de symfony ainsi que du google mailer. Fonctionnement de la route : envoie d'un mot de passe généré aléatoirement puis assigné à l'utilisateur par mail.
- Mise en place de la route de modification de mot de passe pour un utilisateur connecté (nécessité d'envoyer le token lors de la requête)
- Mise en place de la soumission du formulaire de création d'un utilisateur avec les données reçues du front
- Tentative de récupération des erreurs liées aux contraintes du formulaire de création d'utilisateurs 

### Ce que je comptais faire : 

- Pouvoir récupérer les erreurs liées au formulaires de création d'utilisateur.
- Mettre en place la soumission d'un formulaire ainsi que la validation des données soumises lors de la modification du mot de passe.

### Difficultés rencontrées et solutions/contournements apportés : 

- Route création nouvel utilisateur et connexion ne fonctionnent pas lorsqu'appellées par le front => problème de CORS, tentative de résolution en ajoutant manuellement les headers aux responses mais problème au niveau de la route de génération du token puisqu'on ne la gère pas directement.

## Vendredi 13 mars 2020 - Sprint 2

### Ce que j'ai fait :

- Modification des réglages du mailer pour le fonctionnement de l'envoie de mail lorsque le projet est déployé.
- Nouvelle tentative de récupérer les erreurs du formulaire  pour un nouvel utilisateur en changeant la méthode de soumission du formulaire, presque réussi mais il manque encore les erreurs du mot de passe. 
- Résolution du problème de CORS policy grâce à l'installation de Nelmios CORS bundle. Les routes front/back fonctionnent donc toutes.

### Ce que je comptais faire : 

- Pouvoir récupérer les erreurs liées au formulaires de création d'utilisateur.

### Difficultés rencontrées et solutions/contournements apportés : 

- Impossible de récupérer les erreurs du mot de passe => mise en place d'un champs "plain_password" afin de faire la validation sur un mot de passe non hashé mais toujours bloqué.




