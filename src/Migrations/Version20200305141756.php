<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200305141756 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE serie_creator');
        $this->addSql('DROP TABLE serie_genre');
        $this->addSql('ALTER TABLE serie ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE first_air_date first_air_date VARCHAR(255) NOT NULL, CHANGE last_air_date last_air_date VARCHAR(255) NOT NULL, CHANGE last_episode_to_air last_episode_to_air VARCHAR(255) NOT NULL, CHANGE next_episode_to_air next_episode_to_air VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE episode CHANGE air_date air_date VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE season CHANGE air_date air_date VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_creator (serie_id INT NOT NULL, creator_id INT NOT NULL, INDEX IDX_889F99C461220EA6 (creator_id), INDEX IDX_889F99C4D94388BD (serie_id), PRIMARY KEY(serie_id, creator_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_genre (serie_id INT NOT NULL, genre_id INT NOT NULL, INDEX IDX_4B5C076C4296D31F (genre_id), INDEX IDX_4B5C076CD94388BD (serie_id), PRIMARY KEY(serie_id, genre_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C461220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C4D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076C4296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076CD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE episode CHANGE air_date air_date DATETIME NOT NULL');
        $this->addSql('ALTER TABLE season CHANGE air_date air_date DATETIME NOT NULL');
        $this->addSql('ALTER TABLE serie DROP created_at, DROP updated_at, CHANGE first_air_date first_air_date INT NOT NULL, CHANGE last_air_date last_air_date DATETIME NOT NULL, CHANGE last_episode_to_air last_episode_to_air DATETIME NOT NULL, CHANGE next_episode_to_air next_episode_to_air DATETIME NOT NULL');
    }
}
