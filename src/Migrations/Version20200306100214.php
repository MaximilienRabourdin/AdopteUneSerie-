<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200306100214 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, episode_run_time INT NOT NULL, first_air_date VARCHAR(255) NOT NULL, last_air_date VARCHAR(255) NOT NULL, last_episode_to_air VARCHAR(255) NOT NULL, next_episode_to_air VARCHAR(255) NOT NULL, in_production VARCHAR(32) NOT NULL, number_of_episodes INT NOT NULL, number_of_seasons INT NOT NULL, original_language VARCHAR(32) NOT NULL, overview VARCHAR(3000) NOT NULL, poster_path VARCHAR(255) DEFAULT NULL, status VARCHAR(32) NOT NULL, vote_average INT DEFAULT NULL, vote_count INT DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_production_compagny (serie_id INT NOT NULL, production_compagny_id INT NOT NULL, INDEX IDX_CA1F9A78D94388BD (serie_id), INDEX IDX_CA1F9A78759F4088 (production_compagny_id), PRIMARY KEY(serie_id, production_compagny_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_user (serie_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_56F6C27BD94388BD (serie_id), INDEX IDX_56F6C27BA76ED395 (user_id), PRIMARY KEY(serie_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_network (serie_id INT NOT NULL, network_id INT NOT NULL, INDEX IDX_541DF41BD94388BD (serie_id), INDEX IDX_541DF41B34128B91 (network_id), PRIMARY KEY(serie_id, network_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_original_country (serie_id INT NOT NULL, original_country_id INT NOT NULL, INDEX IDX_92526893D94388BD (serie_id), INDEX IDX_92526893949849E4 (original_country_id), PRIMARY KEY(serie_id, original_country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE creator (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE creator_serie (creator_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_2529858A61220EA6 (creator_id), INDEX IDX_2529858AD94388BD (serie_id), PRIMARY KEY(creator_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rating (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, serie_id INT NOT NULL, title VARCHAR(64) NOT NULL, body VARCHAR(255) NOT NULL, vote INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_D8892622A76ED395 (user_id), INDEX IDX_D8892622D94388BD (serie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE network (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, origin_country VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, role_id INT NOT NULL, tmdb_id INT DEFAULT NULL, firstname VARCHAR(64) NOT NULL, lastname VARCHAR(64) NOT NULL, email VARCHAR(320) NOT NULL, password VARCHAR(128) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_8D93D649D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE production_compagny (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(64) NOT NULL, origin_country VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE original_country (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE episode (id INT AUTO_INCREMENT NOT NULL, season_id INT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, overview VARCHAR(64) NOT NULL, air_date VARCHAR(255) NOT NULL, guest_stars VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_DDAA1CDA4EC001D1 (season_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, label VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE season (id INT AUTO_INCREMENT NOT NULL, serie_id INT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, air_date VARCHAR(255) NOT NULL, overview VARCHAR(5000) NOT NULL, season_number INT NOT NULL, episode_count INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_F0E45BA9D94388BD (serie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, label VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre_serie (genre_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_173C8CF14296D31F (genre_id), INDEX IDX_173C8CF1D94388BD (serie_id), PRIMARY KEY(genre_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cast (id INT AUTO_INCREMENT NOT NULL, serie_id INT NOT NULL, tmdb_id INT NOT NULL, protagonist VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_12B8B9F6D94388BD (serie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE actor (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE actor_cast (actor_id INT NOT NULL, cast_id INT NOT NULL, INDEX IDX_22F08B0510DAF24A (actor_id), INDEX IDX_22F08B0527B5E40F (cast_id), PRIMARY KEY(actor_id, cast_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41B34128B91 FOREIGN KEY (network_id) REFERENCES network (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858A61220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858AD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE episode ADD CONSTRAINT FK_DDAA1CDA4EC001D1 FOREIGN KEY (season_id) REFERENCES season (id)');
        $this->addSql('ALTER TABLE season ADD CONSTRAINT FK_F0E45BA9D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF14296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF1D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cast ADD CONSTRAINT FK_12B8B9F6D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE actor_cast ADD CONSTRAINT FK_22F08B0510DAF24A FOREIGN KEY (actor_id) REFERENCES actor (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actor_cast ADD CONSTRAINT FK_22F08B0527B5E40F FOREIGN KEY (cast_id) REFERENCES cast (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serie_production_compagny DROP FOREIGN KEY FK_CA1F9A78D94388BD');
        $this->addSql('ALTER TABLE serie_user DROP FOREIGN KEY FK_56F6C27BD94388BD');
        $this->addSql('ALTER TABLE serie_network DROP FOREIGN KEY FK_541DF41BD94388BD');
        $this->addSql('ALTER TABLE serie_original_country DROP FOREIGN KEY FK_92526893D94388BD');
        $this->addSql('ALTER TABLE creator_serie DROP FOREIGN KEY FK_2529858AD94388BD');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622D94388BD');
        $this->addSql('ALTER TABLE season DROP FOREIGN KEY FK_F0E45BA9D94388BD');
        $this->addSql('ALTER TABLE genre_serie DROP FOREIGN KEY FK_173C8CF1D94388BD');
        $this->addSql('ALTER TABLE cast DROP FOREIGN KEY FK_12B8B9F6D94388BD');
        $this->addSql('ALTER TABLE creator_serie DROP FOREIGN KEY FK_2529858A61220EA6');
        $this->addSql('ALTER TABLE serie_network DROP FOREIGN KEY FK_541DF41B34128B91');
        $this->addSql('ALTER TABLE serie_user DROP FOREIGN KEY FK_56F6C27BA76ED395');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622A76ED395');
        $this->addSql('ALTER TABLE serie_production_compagny DROP FOREIGN KEY FK_CA1F9A78759F4088');
        $this->addSql('ALTER TABLE serie_original_country DROP FOREIGN KEY FK_92526893949849E4');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('ALTER TABLE episode DROP FOREIGN KEY FK_DDAA1CDA4EC001D1');
        $this->addSql('ALTER TABLE genre_serie DROP FOREIGN KEY FK_173C8CF14296D31F');
        $this->addSql('ALTER TABLE actor_cast DROP FOREIGN KEY FK_22F08B0527B5E40F');
        $this->addSql('ALTER TABLE actor_cast DROP FOREIGN KEY FK_22F08B0510DAF24A');
        $this->addSql('DROP TABLE serie');
        $this->addSql('DROP TABLE serie_production_compagny');
        $this->addSql('DROP TABLE serie_user');
        $this->addSql('DROP TABLE serie_network');
        $this->addSql('DROP TABLE serie_original_country');
        $this->addSql('DROP TABLE creator');
        $this->addSql('DROP TABLE creator_serie');
        $this->addSql('DROP TABLE rating');
        $this->addSql('DROP TABLE network');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE production_compagny');
        $this->addSql('DROP TABLE original_country');
        $this->addSql('DROP TABLE episode');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE season');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE genre_serie');
        $this->addSql('DROP TABLE cast');
        $this->addSql('DROP TABLE actor');
        $this->addSql('DROP TABLE actor_cast');
    }
}
