<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SerieRepository")
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
     */
    private $tmdb_id;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $episode_run_time;

    /**
     * @ORM\Column(type="integer")
     */
    private $first_air_date;

    /**
     * @ORM\Column(type="datetime")
     */
    private $last_air_date;

    /**
     * @ORM\Column(type="datetime")
     */
    private $last_episode_to_air;

    /**
     * @ORM\Column(type="datetime")
     */
    private $next_episode_to_air;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $in_production;

    /**
     * @ORM\Column(type="integer")
     */
    private $number_of_episodes;

    /**
     * @ORM\Column(type="integer")
     */
    private $number_of_seasons;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $original_language;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $overview;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $poster_path;

    /**
     * @ORM\Column(type="string", length=32)
     */
    private $status;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vote_average;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vote_count;

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

    public function getOverview(): ?string
    {
        return $this->overview;
    }

    public function setOverview(string $overview): self
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
}
