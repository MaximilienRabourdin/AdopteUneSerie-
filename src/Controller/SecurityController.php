<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController {

    /**
    * @Route("/token", name="api_token")
    */
    public function apiToken()
    {
    }

    /**
    * @Route("/login", name="app_login")
    */
    public function login(AuthenticationUtils $authenticationUtils, SerializerInterface $serializer, Request $request): Response 
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('api_serie_discover');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last email entered by the user
        $lastEmail = $authenticationUtils->getLastUsername();

         $response = new Response();
         $response->setContent($lastEmail);
         $response->headers->add(['Content-type' => 'application/json']);
 
         return $response;

        //return $this->render('security/login.html.twig', ['last_username' => $lastEmail, 'error' => $error]);
    }

    /**
    * @Route("/logout", name="app_logout")
    */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

}