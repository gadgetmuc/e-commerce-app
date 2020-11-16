<?php

namespace NeueFische\Controller;

use NeueFische\Router\ControllerResponse;

class HomeController {

    public function get() {
        
        

        return new ControllerResponse(
            'home.html',
            [
                
            ]
        );
    }
}