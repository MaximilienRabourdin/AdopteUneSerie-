<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NetworkRepository")
 */
class Network
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $tmdb_id;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $origin_country;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Serie", mappedBy="network")
     */
    private $serie;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Serie", mappedBy="Networks")
     */
    private $series;

    public function __construct()
    {
        $this->serie = new ArrayCollection();
        $this->series = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTmdbId(): ?int
    {
        return $this->tmdb_id;
    }

    public function setTmdbId(int $tmdb_id): self
    {
        $this->tmdb_id = $tmdb_id;

        return $this;
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

    public function getOriginCountry(): ?string
    {
        return $this->origin_country;
    }

    public function setOriginCountry(string $origin_country): self
    {
        $this->origin_country = $origin_country;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return Collection|Serie[]
     */
    public function getSerie(): Collection
    {
        return $this->serie;
    }

    public function addSerie(Serie $serie): self
    {
        if (!$this->serie->contains($serie)) {
            $this->serie[] = $serie;
            $serie->setNetwork($this);
        }

        return $this;
    }

    public function removeSerie(Serie $serie): self
    {
        if ($this->serie->contains($serie)) {
            $this->serie->removeElement($serie);
            // set the owning side to null (unless already changed)
            if ($serie->getNetwork() === $this) {
                $serie->setNetwork(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Serie[]
     */
    public function getSeries(): Collection
    {
        return $this->series;
    }

    public function addSeries(Serie $series): self
    {
        if (!$this->series->contains($series)) {
            $this->series[] = $series;
            $series->addNetwork($this);
        }

        return $this;
    }

    public function removeSeries(Serie $series): self
    {
        if ($this->series->contains($series)) {
            $this->series->removeElement($series);
            $series->removeNetwork($this);
        }

        return $this;
    }
}
