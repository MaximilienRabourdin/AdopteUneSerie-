# Dictionnaire de données

## Série (`series`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| title | VARCHAR(64) | NOT NULL |Le titre de la série|
| released | TIMESTAMP | NULL |La date de sortie de la série|
| rated | VARCHAR(64) | NULL |La limite d'age|
| runtime | VARCHAR(64) | NULL |La durée d'un épisode moyen|
| genre | VARCHAR(64) | NULL |Le genre|
| writer | VARCHAR(64) | NULL |Les réalisateurs|
| actors | VARCHAR(64) | NULL |Les acteurs|
| plot | VARCHAR(64) | NULL |Un résumé de la série|
| language | VARCHAR(64) | NULL |Les langues disponibles|
| country | VARCHAR(64) | NULL |Le/s pays de production|
| awards | VARCHAR(64) | NULL |Les récompense décernés|
| poster | VARCHAR(64) | NULL |L'affiche|
| ratings | VARCHAR(64) | NULL |Les differentes évaluation des professionels|
| metascore | VARCHAR(64) | NULL |Score du site Metacritic|
| imdbvotes | VARCHAR(64) | NULL |Nombre de votes|
| imdbid | VARCHAR(64) | NULL |Identifiant sur le site IMDB|
| totalseasons | VARCHAR(64) | NULL |Le nombre de saisons|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de la série
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de la série|

## Users(`users`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page utilisateurs|
| firstname | VARCHAR(64) | NOT NULL |Prénom de l'utilisateur|
| lastname | VARCHAR(64) | NOT NULL |Nom de l'utilisateur|
| email | VARCHAR(320) | NOT NULL |Adresse mail de l'utilisateur|
| password | VARCHAR(128)| NOT NULL | Mot de passe hashé de l'utilisateur |
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de l'utilisateur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'utilisateur|

## Roles(`roles`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page utilisateurs|
|label|VARCHAR(64)|NOT NULL|Label du role|


## USERS HAS FAVORITES(`users_has_favorites`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page utilisateurs|
|user_id|INT|NOT NULL|Id de l'utilisateur|
|serie_id|INT|NOT NULL|Id de la série|