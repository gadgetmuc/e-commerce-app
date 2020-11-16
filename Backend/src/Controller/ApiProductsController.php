<?php 

namespace NeueFische\Controller;

use NeueFische\Router\ControllerResponse;
use NeueFische\Entities\Product;

require_once __DIR__ . '/../../bootstrap.php';

class ApiProductsController {
    public function get() {        
        $doctrineEntityManager = getEntityManager();

        $products = $doctrineEntityManager->getRepository(Product::class)->findAll();
        
        $jsonProductArray = [];
        foreach($products as $product) {
            $jsonProductArray[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'description' => $product->getDescription(),
                'price' => $product->getPrice(),
            ];
        }

        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin:*");
        echo json_encode($jsonProductArray);
        die;
    }
}