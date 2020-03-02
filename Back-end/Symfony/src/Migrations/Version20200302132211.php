<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302132211 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_production_compagny (serie_id INT NOT NULL, production_compagny_id INT NOT NULL, INDEX IDX_CA1F9A78D94388BD (serie_id), INDEX IDX_CA1F9A78759F4088 (production_compagny_id), PRIMARY KEY(serie_id, production_compagny_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_network (serie_id INT NOT NULL, network_id INT NOT NULL, INDEX IDX_541DF41BD94388BD (serie_id), INDEX IDX_541DF41B34128B91 (network_id), PRIMARY KEY(serie_id, network_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41B34128B91 FOREIGN KEY (network_id) REFERENCES network (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE country');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A933434128B91');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A9334759F4088');
        $this->addSql('DROP INDEX IDX_AA3A9334759F4088 ON serie');
        $this->addSql('DROP INDEX IDX_AA3A933434128B91 ON serie');
        $this->addSql('ALTER TABLE serie DROP production_compagny_id, DROP network_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE country (id INT AUTO_INCREMENT NOT NULL, tmdb_id INT NOT NULL, name VARCHAR(64) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE serie_production_compagny');
        $this->addSql('DROP TABLE serie_network');
        $this->addSql('ALTER TABLE serie ADD production_compagny_id INT NOT NULL, ADD network_id INT NOT NULL');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A933434128B91 FOREIGN KEY (network_id) REFERENCES network (id)');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A9334759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id)');
        $this->addSql('CREATE INDEX IDX_AA3A9334759F4088 ON serie (production_compagny_id)');
        $this->addSql('CREATE INDEX IDX_AA3A933434128B91 ON serie (network_id)');
    }
}
