<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302130206 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE genre_serie (genre_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_173C8CF14296D31F (genre_id), INDEX IDX_173C8CF1D94388BD (serie_id), PRIMARY KEY(genre_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE original_country (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_production_compagny (serie_id INT NOT NULL, production_compagny_id INT NOT NULL, INDEX IDX_CA1F9A78D94388BD (serie_id), INDEX IDX_CA1F9A78759F4088 (production_compagny_id), PRIMARY KEY(serie_id, production_compagny_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_user (serie_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_56F6C27BD94388BD (serie_id), INDEX IDX_56F6C27BA76ED395 (user_id), PRIMARY KEY(serie_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF14296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF1D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE country');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE cast CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE episode CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE rating ADD user_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D8892622A76ED395 ON rating (user_id)');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE season CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE serie ADD network_id INT NOT NULL, ADD original_country_id INT NOT NULL, CHANGE poster_path poster_path VARCHAR(255) DEFAULT NULL, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A933434128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id)');
        $this->addSql('CREATE INDEX IDX_AA3A933434128B91 ON serie (network_id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334949849E4 ON serie (original_country_id)');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334949849E4');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT \'NULL\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE genre_serie');
        $this->addSql('DROP TABLE original_country');
        $this->addSql('DROP TABLE serie_production_compagny');
        $this->addSql('DROP TABLE serie_user');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE cast CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE episode CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622A76ED395');
        $this->addSql('DROP INDEX IDX_D8892622A76ED395 ON rating');
        $this->addSql('ALTER TABLE rating DROP user_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE season CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A933434128B91');
        $this->addSql('DROP INDEX IDX_AA3A933434128B91 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A9334949849E4 ON serie');
        $this->addSql('ALTER TABLE serie DROP network_id, DROP original_country_id, CHANGE poster_path poster_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
    }
}
