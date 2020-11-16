<?php 

namespace NeueFische\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="product")
 */
class Product {
    /**
     * @ORM\Id
     * @ORM\Column(type="integer") 
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /** 
     * @ORM\Column(type="string") 
     */
    protected $name; 

    /** 
     * @ORM\Column(type="float") 
     */
    protected $price; 

     /** 
     * @ORM\Column(type="string") 
     */
    protected $description; 


    public function getId(): int {
        return $this->id;
    }

    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name): void {
        $this->name = $name;
    }

    public function getPrice(): float {
        return $this->price;
    }

    public function setPrice(float $price): void {
        $this->price = $price;
    }

    public function getDescription(): string {
        return $this->description;
    }

    public function setDescription(string $description): void {
        $this->description = $description;
    }
}