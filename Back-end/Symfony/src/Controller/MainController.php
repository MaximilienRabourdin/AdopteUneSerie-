<?php

namespace App\Controller;

use App\Entity\Cast;
use App\Entity\Actor;
use App\Entity\Genre;
use App\Entity\Serie;
use App\Entity\Season;
use App\Entity\Creator;
use App\Entity\Episode;
use App\Entity\Network;
use App\Entity\OriginalCountry;
use App\Entity\ProductionCompagny;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;

/**
     * @Route("/tv")
     */
class MainController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        return $this->render('home/routeListDev.html.twig');
    }

    /**
     * @Route("/show/{serie_id}", name="api_serie_id")
     */
    public function serieById(int $serie_id, SerializerInterface $serializer)
    {
        $client = HttpClient::create();

        // API search parameters
        //70613;
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/tv/$serie_id?api_key=$apiKey&language=$language";
        $urlCast = "https://api.themoviedb.org/3/tv/$serie_id/credits?api_key=$apiKey&language=$language";

        $response = $client->request("GET", $url);
        $responseCast = $client->request("GET", $urlCast);

        // Element's list sent by the API
        $listElement = $response->toArray();
        $listCast = $responseCast->toArray();

        $newSerie = new Serie();
        $newSerie->setTmdbId($listElement["id"]);
        $newSerie->setTmdbId($listCast["id"]);
        $newSerie->setName($listElement["name"]);
        $newSerie->setEpisodeRunTime(implode($listElement["episode_run_time"]));
        $newSerie->setFirstAirDate($listElement["first_air_date"]);
        $newSerie->setLastAirDate($listElement["last_air_date"]);
        $newSerie->setLastEpisodeToAir($listElement["last_episode_to_air"]);
        $newSerie->setInProduction($listElement["in_production"]);
        $newSerie->setNumberOfEpisodes($listElement["number_of_episodes"]);
        $newSerie->setNumberOfSeasons($listElement["number_of_seasons"]);
        $newSerie->setOriginalLanguage($listElement["original_language"]);
        $newSerie->setOverview($listElement["overview"]);
        $newSerie->setPosterPath($listElement["poster_path"]);
        $newSerie->setStatus($listElement["status"]);
        $newSerie->setVoteAverage($listElement["vote_average"]);
        $newSerie->setVoteCount($listElement["vote_count"]);

        foreach ($listElement["created_by"] as $creator) {
            $newCreator = new Creator();
            $newCreator->setTmdb_id($creator["id"]);
            $newCreator->setName($creator["name"]);
            $newSerie->getCreators()->add($newCreator);
        }
        // This is the character of the actor
        foreach ($listCast["cast"] as $cast) {
            $newCast = new Cast();
            $newCast->setTmdbId($cast["id"]);
            $newCast->setCharacter($cast["character"]);
            $newSerie->getCast()->add($newCast);
        }
        // This is the actor
        foreach ($listCast["cast"] as $cast) {
            $newActor = new Actor();
            $newActor->setName($cast["name"]);
            $newActor->setTmdbId($cast["id"]);
            $newCast->getActors()->add($newActor);
        }
        foreach ($listElement["networks"] as $network) {
            $newNetwork = new Network();
            $newNetwork->setTmdbId($network["id"]);
            $newNetwork->setName($network["name"]);
            $newNetwork->setOriginCountry($network["origin_country"]);
            $newSerie->getNetworks()->add($newNetwork);
        }
        foreach ($listElement["genres"] as $genre) {
            $newGenre = new Genre();
            $newGenre->setTmdb_id($genre["id"]);
            $newGenre->setLabel($genre["name"]);
            $newSerie->getGenres()->add($newGenre);
        }
        foreach ($listElement["origin_country"] as $originalCountry) {
            $newCountry = new OriginalCountry();
            $newCountry->setName($originalCountry);
            $newCountry->getSeries()->add($newSerie);
            $newSerie->getOriginCountry()->add($newCountry);
        }
        foreach ($listElement["production_companies"] as $production) {
            $newProd = new ProductionCompagny();
            $newProd->setTmdbId($production["id"]);
            $newProd->setName($production["name"]);
            $newProd->setOriginCountry($production["origin_country"]);
            $newProd->getSeries()->add($newSerie);
            $newSerie->getProductionCompagnies()->add($newProd);
        }
        // !!! We will add more infos about episodes and others during V2 !!!
        foreach ($listElement["seasons"] as $season) {
            $newSeason = new Season();
            $newSeason->setTmdbId($season["id"]);
            $newSeason->setName($season["name"]);
            $newSeason->setOverview($season["overview"]);
            $newSeason->setEpisodeCount($season["episode_count"]);
            $newSeason->setAirDate($season["air_date"]);
            $newSeason->setSeasonNumber($season["season_number"]);
            $newSerie->getSeasons()->add($newSeason);
        }
    
        /* ajouter en BDD un Forecast ou un Meteo
        $forecast = new Forecast();
        $forecast->setTemperature($temperature);
        $forecast->setWindVelocity($windVelocity);
        $forecast->setUpdatedAt(new \DateTime());

        $this->manager->persist($forecast);
        $this->manager->flush();
        */

        $json = $serializer->serialize($newSerie, 'json', ['groups' => 'serie:details']);

<<<<<<< HEAD
        $response = new Response();
        $response->setContent($json);
        $response->headers->add(['Content-type' => 'application/json']);
=======
        dump($newSerie);
        
>>>>>>> fcaf0c3b37014022cc476edd5050db1ebea15aa8

        return $response;
        /*return $this->render('details/details.html.twig', [
            'serie' => $newSerie
        ]);
        */
    }

    /**
     * @Route("/search/{serie_name}", name="api_serie_name")
     */
    public function serieByName(string $serie_name)
    {
        $client = HttpClient::create();

        // API search parameters
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/search/tv?api_key=$apiKey&language=$language&query=$serie_name";

        $response = $client->request("GET", $url);

        // Element's list sent by the API
        $listElement = $response->toArray();
        $series = $listElement["results"];

        return $this->render('search/listByName.html.twig', [
                "series" => $series
        ]); 
    }

    /**
     * @Route("/discover", name="api_serie_discover")
     */
    public function serieDiscover()
    {
        $client = HttpClient::create();

        // API search parameters
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";

        /**
         * 49 : HBO, 213 : Neflix, 3078 : OCS, 1024 : Amazon, 285 : Canal +, 2739 : Disney +, 67 : ShowTime
         */
        $networks = "49, 213, 3078, 1024, 285, 2739, 67";
        $date = new \DateTime();
        $firstAirDate = date_format($date, 'Y-m-d');
        $urlTrending = "https://api.themoviedb.org/3/trending/tv/week?api_key=$apiKey&language=fr-FR";

        $urlRecent = "https://api.themoviedb.org/3/discover/tv?api_key=$apiKey&language=$language&sort_by=first_air_date.desc&first_air_date.lte=$firstAirDate&with_networks=49&include_null_first_air_dates=false";

        $urlTopRated = "https://api.themoviedb.org/3/discover/tv?api_key=$apiKey&language=$language&sort_by=vote_average.desc&first_air_date.lte=$firstAirDate&vote_count.gte=200&include_null_first_air_dates=false";
        
        $responseTrending = $client->request("GET", $urlTrending);
        $responseRecent = $client->request("GET", $urlRecent);

        $listElementTrending = $responseTrending->toArray();
        $listElementRecent = $responseRecent->toArray();

        $seriesRecent =  $listElementRecent["results"];
        $seriesTrending = $listElementTrending["results"];

        return $this->render('home/homelist.html.twig', [
            'seriesTrending' => $seriesTrending,
            'seriesRecent' => $seriesRecent
        ]);
    }

    /**
     * @Route("/discover/standard/{vote_average}/{with_runtime}/{with_genres}/{with_networks}", name="api_serie_standard")
     */
    public function serieByStandard($vote_average, $with_runtime, $with_genres, $with_networks) {

        $client = HttpClient::create();

        // API search parameters
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $firstAirDate = date_format(new \DateTime(), 'Y-m-d');
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/discover/tv?api_key=$apiKey&language=$language&first_air_date_year=$firstAirDate&page=1&vote_average.gte=$vote_average&with_genres=$with_genres&with_networks=$with_networks&with_runtime.lte=$with_runtime&include_null_first_air_dates=false";

        $responseStandard = $client->request("GET", $url);

        $listElementStandard = $responseStandard->toArray();

        $seriesStandard =  $listElementStandard["results"];

        return $this->render('search/listByStandard.html.twig', [
            'seriesStandard' => $seriesStandard
        ]);

    }
}