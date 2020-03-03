<?php

namespace App\Controller;

use App\Entity\Creator;
use App\Entity\Genre;
use App\Entity\Network;
use App\Entity\OriginalCountry;
use App\Entity\ProductionCompagny;
use App\Entity\Serie;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api")
 */
class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home()
    {
        $client = HttpClient::create();

        // API search parameters
        $tv_id = 1399;
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/tv/$tv_id?api_key=$apiKey&language=$language";

        $response = $client->request("GET", $url);

        // Element's list sent by the API
        $listElement = $response->toArray();

        $newSerie = new Serie();
        $newSerie->setTmdbId($listElement["id"]);
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

        dump($newSerie);
        dump($listElement);

        return $this->render('home/home.html.twig', [
            'serie' => $newSerie
        ]);
    }
}




/*protected function execute(InputInterface $input, OutputInterface $output)
    {
        $client = HttpClient::create();

        $zipCode = "44300";
        $countryCode = "fr";
        $units = "metric";
        $apiKey = "385ea34e907bdb7512e8da7b2400fc7b";

        $url = "http://api.openweathermap.org/data/2.5/weather?zip=$zipCode,$countryCode&units=$units&appid=$apiKey";

        $response = $client->request("GET", $url);

        $forecastArray = $response->toArray();

        $temperature = $forecastArray['main']['temp'];
        $windVelocity = $forecastArray['wind']['speed'];

        // ajouter en BDD un Forecast ou un Meteo
        $forecast = new Forecast();
        $forecast->setTemperature($temperature);
        $forecast->setWindVelocity($windVelocity);
        $forecast->setUpdatedAt(new \DateTime());

        $this->manager->persist($forecast);
        $this->manager->flush();

        return 1;
    }
    */
