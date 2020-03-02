<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
