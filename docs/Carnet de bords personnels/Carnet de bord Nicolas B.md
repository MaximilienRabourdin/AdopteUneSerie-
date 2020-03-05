# Carnet de bord Nicolas B
Carnet de bord personnel rempli chaque jour

## 25 février 2020

1. Ce que j'ai fait :
    - Création du wireframe de la page d'accueil en version pc et mobile

2. Ce que je comptais faire :
    - Le wireframe de la page de la FAQ

3. Difficultés rencontrés et solutions :
    Rien a signaler

## 26 février 2020

1. Ce que j'ai fait :
    - Création de la wireframe de la FAQ
    - Creation des fichier markdown du projets (cahier des charges, carnet de bords, routes, user stories, dictionnaire de donées)
    - Création du dictionnaire de donnée, routes 
    - Modification apportés suite a la réunion avec l'équipe O'clock

2. Ce que je comptais faire : 
    - Mettre a jour le dictionnaire de donnée

3. Difficultés rencontrés et solutions
    Nous avons eu un peu de mal a trouvé une API correspondant a nos critères mais nous avons finis par trouver deux API potentiels du nom de "The Movie DB" et "TraktAPI"

## 27 février 2020

1. Ce que j'ai fait :
    - Mettre a jour le dictionnaire de donnée et le cahier des charges
    - Créer la base symfony pour le back-end

2. Ce que je comptais faire : 
    - Rien

3. Difficultés rencontrés et solutions
    Rien a signaler

## 28 février 2020

1. Ce que j'ai fait :
    - Mettre a jour les wireframes Accueil et FAQ selon les remarques de l'équipe O'clock
    - Créer les entités de l'api et de la BDD ainsi que le MainController
    - Modifications dans divers fichiers (dictionnaire de donnée, MCD)

2. Ce que je comptais faire : 
    - Faire la connexion avec le BDD

3. Difficultés rencontrés et solutions
    Problèmes pour se connecter a la base de donnée 

## 2 mars 2020

1. Ce que j'ai fait :
    - Connexion avec nos BDD local 
    - Import des entités sur nos BDD local
    - Creations des entité intermediaires (serie has creator, etc...)
    - Premiere consommation de l'api, affichage d'une série sur une template twig

2. Ce que je comptais faire : 
    - Envoyer une série venant de l'api vers nos BDD local

3. Difficultés rencontrés et solutions
    Même probleme que précedement pour se connecter a la BDD, nous avons donc choisie d'utiliser nos BDD local respectives (Nicolas B, Nicolas H) pour ne pas perdre de temps avec un probleme où personne n'a su trouvé de réponse.

## 3 mars 2020

1. Ce que j'ai fait :
    - Rien (Présentation démo Sprint 0)

2. Ce que je comptais faire : 
    - Via l'API faire une requete de recherche grace aux genre pour pouvoir afficher une liste de série correspondant aux genres souhaitait
    - Envoyer une donner de l'api sur nos BDD local

3. Difficultés rencontrés et solutions
    J'ai eu des soucis avec mon repo, plus precisement j'ai perdu l'acces au repo git sur VSCode donc j'ai du supprimer le repo et le cloner mais il manquait les dossier du git ignore donc je les ai copié via le liveshare de Nicolas H mais j'avais des erreurs sur le site donc j'ai fais un composer update mais la j'ai eu une erreur me disant qu'il y avait pas assez de RAM alloué, j'ai donc modifié le fichier php.ini et modifier la ram attribuer a -1, puis le site m'affichait une page blanche j'ai donc décidé de supprimer mon repo, j'ai demandé a Nicolas H de supprimer son git ignore puis de push son repo pour que je puisse le cloner avec tout les fichiers puis de remettre le git ignore et ca a marcher.
    
## 4 mars 2020

1. Ce que j'ai fait :
    - Finir les routes abritant les differentes requetes nous permettant de faire des recherches par un nom ou par des critères, d'afficher une série en détails et enfin d'afficher la page d'acceuil avec les tendances, mieux notés, sortie recentes
    - Creation des templates correspondant au routes (requetes api)

2. Ce que je comptais faire : 
    - Envoyer des donne sur nos BDD local

3. Difficultés rencontrés et solutions
    Petit probleme concernant la route de la recherche par criteres, on ne sait pas comment faire pour que les valeurs mise dans la route (au moment de la rechercher nous auront des critère modifialble) ne soit pas requise

## 5 mars 2020

1. Ce que j'ai fait :
    - Creation du controller de sécurité et celui des user ainsi que les routes (et leurs parametres) pour la connexion, l'inscription, l'affichage de son compte.
    - Creation (modifications) du fichier easy_admin.yaml pour y configurer la page (uniquement accessible par les admin et les mdérateur) l'affichage et la modifcation (edit et delete) de donnée (utilisateur, role, série) 
    - Nicolas H a réussi a établir le code permettant de return (envoyer) le resultat d'une recherche en JSON, pour plus tard l'envoyer au Front-End

2. Ce que je comptais faire : 
    - Envoyer des donnée sur nos BDD local

3. Difficultés rencontrés et solutions
    Quelques difficultés sur le code permettant l'envoie de donnée au front-end en json, mais surtout bloquage sur l'envoie de donnée en BDD a cause de plusieurs erreurs (created_at connot be null) et autres ne nous permettant pas d'avance d'avantage, nous somme dans l'obligation de demander de l'aide a l'équipe O'clock. Aucune solutions trouvé pour le moment

## 6 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 9 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 10 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 11 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 12 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 13 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 16 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 17 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 18 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 19 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler

## 20 mars 2020

1. Ce que j'ai fait :
    - 

2. Ce que je comptais faire : 
    - 

3. Difficultés rencontrés et solutions
    Rien a signaler