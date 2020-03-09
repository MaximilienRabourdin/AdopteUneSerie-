<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200306123523 extends AbstractMigration
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
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C4D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C461220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE creator_serie');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE creator_serie (creator_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_2529858AD94388BD (serie_id), INDEX IDX_2529858A61220EA6 (creator_id), PRIMARY KEY(creator_id, serie_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858A61220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858AD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serie_creator');
    }
}
