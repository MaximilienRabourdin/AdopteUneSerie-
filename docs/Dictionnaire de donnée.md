# Dictionnaire de données

## Série (`serie`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Le titre de la série|
| original_name | VARCHAR(64) | NOT NULL |Le titre original de la série|
| first_air_date | TIMESTAMP | NULL |La date de sortie de la série|
| last_air_date | TIMESTAMP | NULL |La date de fin de la série|
| vote_average | INT | NULL |La note attribué par les critiques|
| vote_count | INT | NULL |Le nombre de votant|
| episode_run_time | INT | NULL |La durée d'un épisode moyen|
| last_episode_to_air | TIMESTAMP | NULL |La date de sortie du dernier épisode|
| next_episode_to_air | TIMESTAMP | NULL |La date de sortie du prochain épisode|
| in_production | VARCHAR(64) | NULL |Indique si la série est en cours de production ou non|
| overview | VARCHAR(64) | NULL |Un résumé de la série|
| popularity | INT | NULL |La popularité de la série|
| original_language | VARCHAR(64) | NULL |La langue d'origine|
| poster_path | VARCHAR(64) | NULL |L'affiche|
| number_of_seasons | INT | NULL |Le nombre de saisons|
| number_of_episodes | INT | NULL |Le nombre d'épisodes|
| status | VARCHAR(64) | NULL |Indique si la série est en cours ou fini|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de la série
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de la série|

## Users(`user`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| firstname | VARCHAR(64) | NOT NULL |Prénom de l'utilisateur|
| lastname | VARCHAR(64) | NOT NULL |Nom de l'utilisateur|
| email | VARCHAR(320) | NOT NULL, UNIQUE |Adresse mail de l'utilisateur|
| password | VARCHAR(128)| NOT NULL | Mot de passe hashé de l'utilisateur |
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de l'utilisateur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'utilisateur|

## Roles(`role`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
|label|VARCHAR(64)|NOT NULL|Label du role|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des roles|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des roles|


## Saisons(`season`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom de la saison|
| episode_count | INT | NOT NULL |Nombre d'épisode de la saison|
| air_date | TIMESTAMP | NOT NULL |Date de diffusion de la saison|
| overview| VARCHAR(64) | NOT NULL |Résumé de la saison|
| season_number | INT | NOT NULL |Nombre de saison|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de la saison|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de la saison|

## Acteur(`cast`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom complet de l'acteur|
| character | VARCHAR(64) | NOT NULL |Nom du personage de l'acteur|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des acteurs|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des acteurs|

## Pays d'origine(`origin_country`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom du pays|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des pays|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des pays|

## Compagnie de Production(`production_compagny`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom de la compagnie|
| orgin_country | VARCHAR(64) | NOT NULL |Pays d'origine de la compagnie|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des compagnie|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des compagnie|

## Episodes(`episode`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom de l'épisode|
| air_date | TIMESTAMP | NOT NULL |Date de diffusion de l'épisode|
| overview| VARCHAR(64) | NOT NULL |Résumé de l'épisode|
| guest_stars | VARCHAR(64) | NOT NULL |Acteurs présent dans l'épisode|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création de l'épisode|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'épisode|

## Genre(`genre`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| label | VARCHAR(64) | NOT NULL |Label du genre|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des genres|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des genres|

## Notes(`rating`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| title | VARCHAR(64) | NOT NULL |Titre de la critique|
| body | VARCHAR(255) | NOT NULL |La critique|
| vote | INT | NOT NULL |La note attribué|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des critiques|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des critiques|

## Réalisateurs(`created_by`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom du/des réalisateurs|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des réalisateurs|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des réalisateurs|

## Chaine de télévision(`network`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de notre page série|
| tmdb_id | INT | NOT NULL |L'id de l'API|
| name | VARCHAR(64) | NOT NULL |Nom du réseau|
| orgin_country | VARCHAR(64) | NOT NULL |Pays d'origine du réseau|
|created_at|TIMESTAMP|NOT NULL, DEFAULT CURRENT_TIMESTAMP|La date de création des réseaux|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour des réseaux|
