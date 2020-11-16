<?php 

require_once './vendor/autoload.php';

use NeueFische\Router\Router;
use NeueFische\Controller\HomeController;
use NeueFische\Controller\ApiCreateUserController;
use NeueFische\Controller\ApiUsersController;
use NeueFische\Controller\ApiCreateProductController;
use NeueFische\Controller\ApiProductsController;


session_start();

$router = new Router(
    [
        // Request URL => Destination Controller Class
        "/" => HomeController::class,
        "/api/create-user" => ApiCreateUserController::class,
        "/api/users" => ApiUsersController::class,
        "/api/products" => ApiProductsController::class,
        "/api/create-product" => ApiCreateProductController::class,
    ]
);

$router->route($_SERVER['REQUEST_URI']);