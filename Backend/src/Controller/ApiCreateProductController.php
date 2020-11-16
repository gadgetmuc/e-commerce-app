<?php 

namespace NeueFische\Controller;

use NeueFische\Router\ControllerResponse;
use NeueFische\Entities\Product;

require_once __DIR__ . '/../../bootstrap.php';

class ApiCreateProductController {
    public function get() {        
        $json = file_get_contents('php://input');
        $POST = json_decode($json);

        $product = new Product();
        $product->setName($POST->name);
        $product->setPrice($POST->price);
        $product->setDescription($POST->description);
        
        $doctrineEntityManager = getEntityManager();
        $doctrineEntityManager->persist($product);
        $doctrineEntityManager->flush();

        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin:*");
        echo json_encode([
            'productId' => $product->getId()
        ]);
        die;
    }
}