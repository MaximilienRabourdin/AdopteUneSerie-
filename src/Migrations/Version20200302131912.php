<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302131912 extends AbstractMigration
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
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF14296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF1D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE country');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE cast ADD serie_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE cast ADD CONSTRAINT FK_12B8B9F6D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_12B8B9F6D94388BD ON cast (serie_id)');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE episode ADD season_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE episode ADD CONSTRAINT FK_DDAA1CDA4EC001D1 FOREIGN KEY (season_id) REFERENCES season (id)');
        $this->addSql('CREATE INDEX IDX_DDAA1CDA4EC001D1 ON episode (season_id)');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE rating ADD user_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE rating ADD CONSTRAINT FK_D8892622A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_D8892622A76ED395 ON rating (user_id)');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE season ADD serie_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE season ADD CONSTRAINT FK_F0E45BA9D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_F0E45BA9D94388BD ON season (serie_id)');
        $this->addSql('ALTER TABLE serie ADD production_compagny_id INT NOT NULL, ADD network_id INT NOT NULL, ADD original_country_id INT NOT NULL, ADD user_id INT NOT NULL, CHANGE poster_path poster_path VARCHAR(255) DEFAULT NULL, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A933434128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334759F4088 ON serie (production_compagny_id)');
        $this->addSql('CREATE INDEX IDX_AA3A933434128B91 ON serie (network_id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334949849E4 ON serie (original_country_id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334A76ED395 ON serie (user_id)');
        $this->addSql('ALTER TABLE user ADD role_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649D60322AC ON user (role_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334949849E4');
        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT \'NULL\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE genre_serie');
        $this->addSql('DROP TABLE original_country');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE cast DROP FOREIGN KEY FK_12B8B9F6D94388BD');
        $this->addSql('DROP INDEX IDX_12B8B9F6D94388BD ON cast');
        $this->addSql('ALTER TABLE cast DROP serie_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE episode DROP FOREIGN KEY FK_DDAA1CDA4EC001D1');
        $this->addSql('DROP INDEX IDX_DDAA1CDA4EC001D1 ON episode');
        $this->addSql('ALTER TABLE episode DROP season_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE rating DROP FOREIGN KEY FK_D8892622A76ED395');
        $this->addSql('DROP INDEX IDX_D8892622A76ED395 ON rating');
        $this->addSql('ALTER TABLE rating DROP user_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE season DROP FOREIGN KEY FK_F0E45BA9D94388BD');
        $this->addSql('DROP INDEX IDX_F0E45BA9D94388BD ON season');
        $this->addSql('ALTER TABLE season DROP serie_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334759F4088');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A933434128B91');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334A76ED395');
        $this->addSql('DROP INDEX IDX_AA3A9334759F4088 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A933434128B91 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A9334949849E4 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A9334A76ED395 ON serie');
        $this->addSql('ALTER TABLE serie DROP production_compagny_id, DROP network_id, DROP original_country_id, DROP user_id, CHANGE poster_path poster_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('DROP INDEX IDX_8D93D649D60322AC ON user');
        $this->addSql('ALTER TABLE user DROP role_id, CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
    }
}
