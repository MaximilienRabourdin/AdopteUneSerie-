<?php

namespace App\Controller;

use App\Entity\Cast;
use App\Entity\Actor;
use App\Entity\Genre;
use App\Entity\Serie;
use App\Entity\Season;
use App\Entity\Creator;
use App\Entity\Network;
use App\Entity\OriginalCountry;
use App\Entity\ProductionCompagny;
use DateTime;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class MainController extends AbstractController 
{

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @Route("/token_check", name="api_token_check")
     */
    // public function tokenCheck()
    // {
    // }

    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        return $this->render('home/routeListDev.html.twig');
    }

    /**
     * @Route("/show/", name="api_serie_id")
     */
    public function serieById(SerializerInterface $serializer, Request $request)
    {
        $createdAt = new DateTime();
        $client = HttpClient::create();

        // Get the serie's id from the request sent by the frontend
        $serie_id = $request->query->get('serie_id');
        
        // API search parameters
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
            $newCreator->setTmdbId($creator["id"]);
            $newCreator->setName($creator["name"]);
            $newCreator->setCreated_at($createdAt);
            $newSerie->getCreators()->add($newCreator);
            $this->manager->persist($newCreator);
        }
        // This is the actor
        foreach ($listCast["cast"] as $cast) {
            $newCast = new Cast();
            $newCast->setTmdbId($cast["id"]);
            $newCast->setCharacter($cast["character"]);
            $newActor = new Actor();
            $newActor->setName($cast["name"]);
            $newActor->setTmdbId($cast["id"]);
            $newCast->setCreatedAt($createdAt);
            $newActor->setCreatedAt($createdAt);
            $newSerie->getCast()->add($newCast);
            $newCast->getActors()->add($newActor);
            $this->manager->persist($newCast);
            $this->manager->persist($newActor);
        }
        foreach ($listElement["networks"] as $network) {
            $newNetwork = new Network();
            $newNetwork->setTmdbId($network["id"]);
            $newNetwork->setName($network["name"]);
            $newNetwork->setOriginCountry($network["origin_country"]);
            $newNetwork->setCreatedAt($createdAt);
            $newSerie->getNetworks()->add($newNetwork);
            $this->manager->persist($newNetwork);
        }
        foreach ($listElement["genres"] as $genre) {
            $newGenre = new Genre();
            $newGenre->setTmdbId($genre["id"]);
            $newGenre->setLabel($genre["name"]);
            $newGenre->setCreatedAt($createdAt);
            $newSerie->getGenres()->add($newGenre);
            $this->manager->persist($newGenre);
        }
        foreach ($listElement["origin_country"] as $originalCountry) {
            $newCountry = new OriginalCountry();
            $newCountry->setName($originalCountry);
            $newCountry->getSeries()->add($newSerie);
            $newCountry->setCreatedAt($createdAt);
            $newSerie->getOriginCountry()->add($newCountry);
            $this->manager->persist($newCountry);
        }
        foreach ($listElement["production_companies"] as $production) {
            $newProd = new ProductionCompagny();
            $newProd->setTmdbId($production["id"]);
            $newProd->setName($production["name"]);
            $newProd->setOriginCountry($production["origin_country"]);
            $newProd->getSeries()->add($newSerie);
            $newProd->setCreatedAt($createdAt);
            $newSerie->getProductionCompagnies()->add($newProd);
            $this->manager->persist($newProd);
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
            $newSeason->setCreated_at($createdAt);
            $newSerie->getSeasons()->add($newSeason);
            $this->manager->persist($newSeason);
        }
           
        $newSerie->setCreated_at($createdAt);
        $this->manager->persist($newSerie);

        // Add in the database
        $this->manager->flush();
        
        // Send all of the informations to the Front end in JSON format
        $json = $serializer->serialize($newSerie, 'json', ['groups' => 'serie:details']);

        $response = new Response();
        $response->setContent($json);
        $response->headers->add(['Content-type' => 'application/json']);

        return $response;
        /*
        return $this->render('details/details.html.twig', [
            'serie' => $newSerie
        ]);
        */
    }

    /**
     * @Route("/search/", name="api_serie_name")
     */
    public function serieByName(SerializerInterface $serializer, Request $request)
    {
        $client = HttpClient::create();

        // get the parameter "serie_name" from the url
        $serie_name = $request->query->get("serie_name");
        // API search parameters
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/search/tv?api_key=$apiKey&language=$language&query=$serie_name";

        $response = $client->request("GET", $url);

        // Element's list sent by the API
        $listElement = $response->toArray();
        $series = $listElement["results"];

        // Send all of the informations to the Front end in JSON format
        $json = $serializer->serialize($series, 'json', ['groups' => 'serie:details']);

        $response = new Response();
        $response->setContent($json);
        $response->headers->add(['Content-type' => 'application/json']);

        return $response;
        /*return $this->render('search/listByName.html.twig', [
            "series" => $series
        ]);
        */
    }

    /**
     * @Route("/discover/", name="api_serie_discover")
     */
    public function serieDiscover(SerializerInterface $serializer)
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
        $responseTopRated = $client->request("GET", $urlTopRated);

        // One list for each API's request
        $listElementTrending = $responseTrending->toArray();
        $listElementRecent = $responseRecent->toArray();
        $listElementTopRated = $responseTopRated->toArray();

        // One array for each list of series
        $seriesRecent =  $listElementRecent["results"];
        $seriesTrending = $listElementTrending["results"];
        $seriesTopRated = $listElementTopRated["results"];

        // All of the series in one array 
        $seriesArray = array_merge($seriesRecent, $seriesTopRated, $seriesTrending);

        // Transform series' array into json
        $json = $serializer->serialize($seriesArray, 'json', ['groups' => 'serie:details']);


        $response = new Response();
        $response->setContent($json);
        $response->headers->add(['Content-type' => 'application/json']);
        // DEBUG : 
        // dump($response);

        return $response;

        /*
        return $this->render('home/homelist.html.twig', [
            'seriesTrending' => $seriesTrending,
            'seriesRecent' => $seriesRecent
        ]);
        */      
    }

    /**
     * @Route("/discover/standard/", name="api_serie_standard")
     */
    public function serieByStandard(SerializerInterface $serializer, Request $request)
    {
        $client = HttpClient::create();

        // API parameters from URL
        $voteAverage = $request->query->get("vote_average");
        $withGenres = $request->query->get("with_genres");
        $withNetworks = $request->query->get("with_networks");
        $withRuntime = $request->query->get("with_runtime");
        $firstAirYear = $request->query->get("first_air_year");
        $sortBy = $request->query->get("sort_by");

        // API search parameters
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $airYearMax = date_format(new \DateTime(), 'Y-m-d');
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/discover/tv?api_key=$apiKey&language=$language&sort_by=$sortBy&first_air_date.lte=$airYearMax&first_air_date_year=$firstAirYear&page=1&vote_average.gte=$voteAverage&with_genres=$withGenres&with_networks=$withNetworks&with_runtime.lte=$withRuntime&include_null_first_air_dates=false";


        $responseStandard = $client->request("GET", $url);
        $listElementStandard = $responseStandard->toArray();
        $seriesStandard =  $listElementStandard["results"];

        $json = $serializer->serialize($seriesStandard, 'json', ['groups' => 'serie:details']);

        $response = new Response();
        $response->setContent($json);
        $response->headers->add(['Content-type' => 'application/json']);
        
        // DEBUG : 
        // dump($response);

        return $response;

        /*
        return $this->render('search/listByStandard.html.twig', [
            'seriesStandard' => $seriesStandard
        ]);
        */
    }
}
