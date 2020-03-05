<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CreatorRepository")
 */
class Creator
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"serie:details"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"serie:details"})
     */
    private $tmdb_id;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups({"serie:details"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\serie", inversedBy="creators", cascade={"persist"}))
     */
    private $serie;

    public function __construct()
    {
        $this->serie = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of tmdb_id
     */ 
    public function getTmdbId()
    {
        return $this->tmdb_id;
    }

    /**
     * Set the value of tmdb_id
     *
     * @return  self
     */ 
    public function setTmdbId($tmdb_id)
    {
        $this->tmdb_id = $tmdb_id;

        return $this;
    }

    /**
     * Get the value of created_at
     */ 
    public function getCreated_at()
    {
        return $this->created_at;
    }

    /**
     * Set the value of created_at
     *
     * @return  self
     */ 
    public function setCreated_at($created_at)
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * Get the value of updated_at
     */ 
    public function getUpdated_at()
    {
        return $this->updated_at;
    }

    /**
     * Set the value of updated_at
     *
     * @return  self
     */ 
    public function setUpdated_at($updated_at)
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return Collection|serie[]
     */
    public function getSerie(): Collection
    {
        return $this->serie;
    }

    public function addSerie(serie $serie): self
    {
        if (!$this->serie->contains($serie)) {
            $this->serie[] = $serie;
        }

        return $this;
    }

    public function removeSerie(serie $serie): self
    {
        if ($this->serie->contains($serie)) {
            $this->serie->removeElement($serie);
        }

        return $this;
    }
}
