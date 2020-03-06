<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SerieRepository")
 * @UniqueEntity("tmdb_id")
 */
class Serie
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
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
     * @ORM\Column(type="integer")
     * @Groups({"serie:details"})
     */
    private $episode_run_time;

    /**
     * @ORM\Column(type="string")
     * @Groups({"serie:details"})
     */
    private $first_air_date;

    /**
     * @ORM\Column(type="string")
     * @Groups({"serie:details"})
     */
    private $last_air_date;

    /**
     * @ORM\Column(type="string")
     * @Groups({"serie:details"})
     */
    private $last_episode_to_air;

    /**
     * @ORM\Column(type="string")
     * @Groups({"serie:details"})
     */
    private $next_episode_to_air;

    /**
     * @ORM\Column(type="string", length=32)
     * @Groups({"serie:details"})
     */
    private $in_production;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"serie:details"})
     */
    private $number_of_episodes;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"serie:details"})
     */
    private $number_of_seasons;

    /**
     * @ORM\Column(type="string", length=32)
     * @Groups({"serie:details"})
     */
    private $original_language;

    /**
     * @ORM\Column(type="string", length=3000)
     * @Groups({"serie:details"})
     */
    private $overview;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"serie:details"})
     */
    private $poster_path;

    /**
     * @ORM\Column(type="string", length=32)
     * @Groups({"serie:details"})
     */
    private $status;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"serie:details"})
     */
    private $vote_average;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"serie:details"})
     */
    private $vote_count;


    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Cast", mappedBy="serie", cascade={"persist"})
     * @Groups({"serie:details"})
     */
    private $cast;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Season", mappedBy="serie", cascade={"persist"})
     * @Groups({"serie:details"})
     */
    private $seasons;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\ProductionCompagny", mappedBy="series", cascade={"persist"})
     * @Groups({"serie:details"})
     */
    private $productionCompagnies;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="series")
     * @Groups({"serie:details"})
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Network", mappedBy="series")
     * @Groups({"serie:details"})
     */
    private $networks;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Rating", mappedBy="serie", orphanRemoval=true)
     * @Groups({"serie:details"})
     */
    private $ratings;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\OriginalCountry", mappedBy="series")
     * @Groups({"serie:details"})
     */
    private $origin_country;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Genre", mappedBy="series")
     */
    private $genres;

     /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Creator", mappedBy="series")
     */
    private $creators;
   
    public function __construct()
    {
        $this->cast = new ArrayCollection();
        $this->seasons = new ArrayCollection();
        $this->productionCompagnies = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->networks = new ArrayCollection();
        $this->ratings = new ArrayCollection();
        $this->origin_country = new ArrayCollection();
        $this->genres = new ArrayCollection();
        $this->creators = new ArrayCollection();
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

    public function getEpisodeRunTime(): ?string
    {
        return $this->episode_run_time;
    }

    public function setEpisodeRunTime(string $episode_run_time): self
    {
        $this->episode_run_time = $episode_run_time;

        return $this;
    }

    public function getFirstAirDate(): ?string
    {
        return $this->first_air_date;
    }

    public function setFirstAirDate(string $first_air_date): self
    {
        $this->first_air_date = $first_air_date;

        return $this;
    }

    public function getLastAirDate(): ?string
    {
        return $this->last_air_date;
    }

    public function setLastAirDate(string $last_air_date): self
    {
        $this->last_air_date = $last_air_date;

        return $this;
    }

    public function getLastEpisodeToAir(): ?string
    {
        return $this->last_episode_to_air;
    }

    public function setLastEpisodeToAir(string $last_episode_to_air): self
    {
        $this->last_episode_to_air = $last_episode_to_air;

        return $this;
    }

    public function getNextEpisodeToAir(): ?string
    {
        return $this->next_episode_to_air;
    }

    public function setNextEpisodeToAir(?string $next_episode_to_air): self
    {
        $this->next_episode_to_air = $next_episode_to_air;

        return $this;
    }

    public function getInProduction(): ?string
    {
        return $this->in_production;
    }

    public function setInProduction(string $in_production): self
    {
        $this->in_production = $in_production;

        return $this;
    }

    public function getNumberOfEpisodes(): ?int
    {
        return $this->number_of_episodes;
    }

    public function setNumberOfEpisodes(int $number_of_episodes): self
    {
        $this->number_of_episodes = $number_of_episodes;

        return $this;
    }

    public function getNumberOfSeasons(): ?int
    {
        return $this->number_of_seasons;
    }

    public function setNumberOfSeasons(int $number_of_seasons): self
    {
        $this->number_of_seasons = $number_of_seasons;

        return $this;
    }

    public function getOriginalLanguage(): ?string
    {
        return $this->original_language;
    }

    public function setOriginalLanguage(string $original_language): self
    {
        $this->original_language = $original_language;

        return $this;
    }

    public function getOverview()
    {
        return $this->overview;
    }

    public function setOverview($overview)
    {
        $this->overview = $overview;

        return $this;
    }

    public function getPosterPath(): ?string
    {
        return $this->poster_path;
    }

    public function setPosterPath(?string $poster_path): self
    {
        $this->poster_path = $poster_path;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getVoteAverage(): ?string
    {
        return $this->vote_average;
    }

    public function setVoteAverage(string $vote_average): self
    {
        $this->vote_average = $vote_average;

        return $this;
    }

    public function getVoteCount(): ?int
    {
        return $this->vote_count;
    }

    public function setVoteCount(?int $vote_count): self
    {
        $this->vote_count = $vote_count;

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
            $cast->setSerie($this);
        }

        return $this;
    }

    public function removeCast(Cast $cast): self
    {
        if ($this->Cast->contains($cast)) {
            $this->Cast->removeElement($cast);
            // set the owning side to null (unless already changed)
            if ($cast->getSerie() === $this) {
                $cast->setSerie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Season[]
     */
    public function getSeasons(): Collection
    {
        return $this->seasons;
    }

    public function addSeason(Season $season): self
    {
        if (!$this->seasons->contains($season)) {
            $this->seasons[] = $season;
            $season->setSerie($this);
        }

        return $this;
    }

    public function removeSeason(Season $season): self
    {
        if ($this->seasons->contains($season)) {
            $this->seasons->removeElement($season);
            // set the owning side to null (unless already changed)
            if ($season->getSerie() === $this) {
                $season->setSerie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProductionCompagny[]
     */
    public function getProductionCompagnies(): Collection
    {
        return $this->productionCompagnies;
    }

    public function addProductionCompagny(ProductionCompagny $productionCompagny): self
    {
        if (!$this->productionCompagnies->contains($productionCompagny)) {
            $this->productionCompagnies[] = $productionCompagny;
        }

        return $this;
    }

    public function removeProductionCompagny(ProductionCompagny $productionCompagny): self
    {
        if ($this->productionCompagnies->contains($productionCompagny)) {
            $this->productionCompagnies->removeElement($productionCompagny);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
        }

        return $this;
    }

    /**
     * @return Collection|Network[]
     */
    public function getNetworks(): Collection
    {
        return $this->networks;
    }

    public function addNetwork(Network $network): self
    {
        if (!$this->networks->contains($network)) {
            $this->networks[] = $network;
        }

        return $this;
    }

    public function removeNetwork(Network $network): self
    {
        if ($this->networks->contains($network)) {
            $this->networks->removeElement($network);
        }

        return $this;
    }

    /**
     * @return Collection|Rating[]
     */
    public function getRatings(): Collection
    {
        return $this->ratings;
    }

    public function addRating(Rating $rating): self
    {
        if (!$this->ratings->contains($rating)) {
            $this->ratings[] = $rating;
            $rating->setSerie($this);
        }

        return $this;
    }

    public function removeRating(Rating $rating): self
    {
        if ($this->ratings->contains($rating)) {
            $this->ratings->removeElement($rating);
            // set the owning side to null (unless already changed)
            if ($rating->getSerie() === $this) {
                $rating->setSerie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|OriginalCountry[]
     */
    public function getOriginCountry(): Collection
    {
        return $this->origin_country;
    }

    public function addOriginCountry(OriginalCountry $originCountry): self
    {
        if (!$this->origin_country->contains($originCountry)) {
            $this->origin_country[] = $originCountry;
        }

        return $this;
    }

    public function removeOriginCountry(OriginalCountry $originCountry): self
    {
        if ($this->origin_country->contains($originCountry)) {
            $this->origin_country->removeElement($originCountry);
        }

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
     * @return Collection|Genre[]
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    public function addGenre(Genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres[] = $genre;
            $genre->addSeries($this);
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        if ($this->genres->contains($genre)) {
            $this->genres->removeElement($genre);
            $genre->removeSeries($this);
        }

        return $this;
     }

    /**
     * @return Collection|Creator[]
     */
    public function getCreators(): Collection
    {
        return $this->creators;
    }

    public function addCreator(Creator $creator): self
    {
        if (!$this->creators->contains($creator)) {
            $this->creators[] = $creator;
            $creator->addSeries($this);
        }

        return $this;
    }

    public function removeCreator(Creator $creator): self
    {
        if ($this->creators->contains($creator)) {
            $this->creators->removeElement($creator);
            $creator->removeSeries($this);
        }

        return $this;
    }
}
