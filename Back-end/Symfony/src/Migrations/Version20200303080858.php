<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200303080858 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE creator_serie (creator_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_2529858A61220EA6 (creator_id), INDEX IDX_2529858AD94388BD (serie_id), PRIMARY KEY(creator_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE genre_serie (genre_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_173C8CF14296D31F (genre_id), INDEX IDX_173C8CF1D94388BD (serie_id), PRIMARY KEY(genre_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858A61220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858AD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF14296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE genre_serie ADD CONSTRAINT FK_173C8CF1D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE creator_serie');
        $this->addSql('DROP TABLE genre_serie');
    }
}
