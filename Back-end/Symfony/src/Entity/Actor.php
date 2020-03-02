<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActorRepository")
 */
class Actor
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
     * @ORM\Column(type="datetime")
     */
    private $birthdate;
    
    /**
     * @ORM\Column(type="datetime")
     */
    private $deathdate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Cast", mappedBy="actor")
     */
    private $cast;

    public function __construct()
    {
        $this->cast = new ArrayCollection();
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

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getDeathdate(): ?\DateTimeInterface
    {
        return $this->deathdate;
    }

    public function setDeathdate(\DateTimeInterface $deathdate): self
    {
        $this->deathdate = $deathdate;

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
     * @return Collection|Cast[]
     */
    public function getCast(): Collection
    {
        return $this->cast;
    }

    public function addCast(Cast $cast): self
    {
        if (!$this->cast->contains($cast)) {
            $this->cast[] = $cast;
            $cast->setActor($this);
        }

        return $this;
    }

    public function removeCast(Cast $cast): self
    {
        if ($this->cast->contains($cast)) {
            $this->cast->removeElement($cast);
            // set the owning side to null (unless already changed)
            if ($cast->getActor() === $this) {
                $cast->setActor(null);
            }
        }

        return $this;
    }
}
