<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302133247 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_creator (serie_id INT NOT NULL, creator_id INT NOT NULL, INDEX IDX_889F99C4D94388BD (serie_id), INDEX IDX_889F99C461220EA6 (creator_id), PRIMARY KEY(serie_id, creator_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_genre (serie_id INT NOT NULL, genre_id INT NOT NULL, INDEX IDX_4B5C076CD94388BD (serie_id), INDEX IDX_4B5C076C4296D31F (genre_id), PRIMARY KEY(serie_id, genre_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_production_compagny (serie_id INT NOT NULL, production_compagny_id INT NOT NULL, INDEX IDX_CA1F9A78D94388BD (serie_id), INDEX IDX_CA1F9A78759F4088 (production_compagny_id), PRIMARY KEY(serie_id, production_compagny_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_network (serie_id INT NOT NULL, network_id INT NOT NULL, INDEX IDX_541DF41BD94388BD (serie_id), INDEX IDX_541DF41B34128B91 (network_id), PRIMARY KEY(serie_id, network_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_user (serie_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_56F6C27BD94388BD (serie_id), INDEX IDX_56F6C27BA76ED395 (user_id), PRIMARY KEY(serie_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C4D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C461220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076CD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_genre ADD CONSTRAINT FK_4B5C076C4296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41B34128B91 FOREIGN KEY (network_id) REFERENCES network (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE cast CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE episode CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE original_country CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE rating CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE season CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A933434128B91');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334759F4088');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334A76ED395');
        $this->addSql('DROP INDEX IDX_AA3A9334759F4088 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A9334A76ED395 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A933434128B91 ON serie');
        $this->addSql('ALTER TABLE serie DROP production_compagny_id, DROP network_id, DROP user_id, CHANGE poster_path poster_path VARCHAR(255) DEFAULT NULL, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE serie_creator');
        $this->addSql('DROP TABLE serie_genre');
        $this->addSql('DROP TABLE serie_production_compagny');
        $this->addSql('DROP TABLE serie_network');
        $this->addSql('DROP TABLE serie_user');
        $this->addSql('ALTER TABLE actor CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE cast CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE creator CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE episode CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE genre CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE network CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE original_country CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE production_compagny CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE rating CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE role CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE season CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE serie ADD production_compagny_id INT NOT NULL, ADD network_id INT NOT NULL, ADD user_id INT NOT NULL, CHANGE poster_path poster_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE vote_average vote_average INT DEFAULT NULL, CHANGE vote_count vote_count INT DEFAULT NULL');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A933434128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334759F4088 ON serie (production_compagny_id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334A76ED395 ON serie (user_id)');
        $this->addSql('CREATE INDEX IDX_AA3A933434128B91 ON serie (network_id)');
        $this->addSql('ALTER TABLE user CHANGE updated_at updated_at DATETIME DEFAULT \'NULL\'');
    }
}
