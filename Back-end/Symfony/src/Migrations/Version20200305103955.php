<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200305103955 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_original_country (serie_id INT NOT NULL, original_country_id INT NOT NULL, INDEX IDX_92526893D94388BD (serie_id), INDEX IDX_92526893949849E4 (original_country_id), PRIMARY KEY(serie_id, original_country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE actor_cast (actor_id INT NOT NULL, cast_id INT NOT NULL, INDEX IDX_22F08B0510DAF24A (actor_id), INDEX IDX_22F08B0527B5E40F (cast_id), PRIMARY KEY(actor_id, cast_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actor_cast ADD CONSTRAINT FK_22F08B0510DAF24A FOREIGN KEY (actor_id) REFERENCES actor (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actor_cast ADD CONSTRAINT FK_22F08B0527B5E40F FOREIGN KEY (cast_id) REFERENCES cast (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serie_creator');
        $this->addSql('DROP TABLE serie_genre');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334949849E4');
        $this->addSql('DROP INDEX IDX_AA3A9334949849E4 ON serie');
        $this->addSql('ALTER TABLE serie DROP original_country_id');
        $this->addSql('ALTER TABLE rating CHANGE tmdb_id serie_id INT NOT NULL');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_D8892622D94388BD ON rating (serie_id)');
        $this->addSql('ALTER TABLE original_country DROP tmdb_id');
        $this->addSql('ALTER TABLE cast DROP FOREIGN KEY FK_12B8B9F610DAF24A');
        $this->addSql('DROP INDEX IDX_12B8B9F610DAF24A ON cast');
        $this->addSql('ALTER TABLE cast DROP actor_id');
        $this->addSql('ALTER TABLE actor DROP birthdate, DROP deathdate');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_creator (serie_id INT NOT NULL, creator_id INT NOT NULL, INDEX IDX_889F99C4D94388BD (serie_id), INDEX IDX_889F99C461220EA6 (creator_id), PRIMARY KEY(serie_id, creator_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_genre (serie_id INT NOT NULL, genre_id INT NOT NULL, INDEX IDX_4B5C076CD94388BD (serie_id), INDEX IDX_4B5C076C4296D31F (genre_id), PRIMARY KEY(serie_id, genre_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C461220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C4D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076C4296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076CD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serie_original_country');
        $this->addSql('DROP TABLE actor_cast');
        $this->addSql('ALTER TABLE actor ADD birthdate DATETIME NOT NULL, ADD deathdate DATETIME NOT NULL');
        $this->addSql('ALTER TABLE cast ADD actor_id INT NOT NULL');
        $this->addSql('ALTER TABLE cast ADD CONSTRAINT FK_12B8B9F610DAF24A FOREIGN KEY (actor_id) REFERENCES actor (id)');
        $this->addSql('CREATE INDEX IDX_12B8B9F610DAF24A ON cast (actor_id)');
        $this->addSql('ALTER TABLE original_country ADD tmdb_id INT NOT NULL');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622D94388BD');
        $this->addSql('DROP INDEX IDX_D8892622D94388BD ON rating');
        $this->addSql('ALTER TABLE rating CHANGE serie_id tmdb_id INT NOT NULL');
        $this->addSql('ALTER TABLE serie ADD original_country_id INT NOT NULL');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334949849E4 ON serie (original_country_id)');
    }
}
