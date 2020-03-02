<?php

namespace App\Controller;

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

        // Paramètres de la recherche
        $tv_id = 1399;
        $apiKey = "273116a48e6155286bb1ce0b34262df3";
        $language = "fr-FR";
        $url = "https://api.themoviedb.org/3/tv/$tv_id?api_key=$apiKey&language=$language";
      
        $response = $client->request("GET", $url);

        // Liste des éléments retournés par l'API
        $listElement = $response->toArray();
        $name = $listElement["name"];
        $plot = $listElement["overview"];
        $networks = $listElement["networks"];
        dump($listElement);

        return $this->render('home/home.html.twig', [
            'plot' => $plot,
            'networks' => $networks,
            'name' => $name
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