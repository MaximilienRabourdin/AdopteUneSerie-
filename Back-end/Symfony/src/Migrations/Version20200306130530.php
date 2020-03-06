<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200306130530 extends AbstractMigration
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
        $this->addSql('CREATE TABLE network_serie (network_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_64202A6834128B91 (network_id), INDEX IDX_64202A68D94388BD (serie_id), PRIMARY KEY(network_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_serie (user_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_48F8686CA76ED395 (user_id), INDEX IDX_48F8686CD94388BD (serie_id), PRIMARY KEY(user_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE production_compagny_serie (production_compagny_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_CCD043CE759F4088 (production_compagny_id), INDEX IDX_CCD043CED94388BD (serie_id), PRIMARY KEY(production_compagny_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE original_country_serie (original_country_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_C2BB5F81949849E4 (original_country_id), INDEX IDX_C2BB5F81D94388BD (serie_id), PRIMARY KEY(original_country_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858A61220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE creator_serie ADD CONSTRAINT FK_2529858AD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE network_serie ADD CONSTRAINT FK_64202A6834128B91 FOREIGN KEY (network_id) REFERENCES network (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE network_serie ADD CONSTRAINT FK_64202A68D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_serie ADD CONSTRAINT FK_48F8686CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_serie ADD CONSTRAINT FK_48F8686CD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE production_compagny_serie ADD CONSTRAINT FK_CCD043CE759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE production_compagny_serie ADD CONSTRAINT FK_CCD043CED94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE original_country_serie ADD CONSTRAINT FK_C2BB5F81949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE original_country_serie ADD CONSTRAINT FK_C2BB5F81D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serie_creator');
        $this->addSql('DROP TABLE serie_network');
        $this->addSql('DROP TABLE serie_original_country');
        $this->addSql('DROP TABLE serie_production_compagny');
        $this->addSql('DROP TABLE serie_user');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serie_creator (serie_id INT NOT NULL, creator_id INT NOT NULL, INDEX IDX_889F99C4D94388BD (serie_id), INDEX IDX_889F99C461220EA6 (creator_id), PRIMARY KEY(serie_id, creator_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_network (serie_id INT NOT NULL, network_id INT NOT NULL, INDEX IDX_541DF41BD94388BD (serie_id), INDEX IDX_541DF41B34128B91 (network_id), PRIMARY KEY(serie_id, network_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_original_country (serie_id INT NOT NULL, original_country_id INT NOT NULL, INDEX IDX_92526893D94388BD (serie_id), INDEX IDX_92526893949849E4 (original_country_id), PRIMARY KEY(serie_id, original_country_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_production_compagny (serie_id INT NOT NULL, production_compagny_id INT NOT NULL, INDEX IDX_CA1F9A78D94388BD (serie_id), INDEX IDX_CA1F9A78759F4088 (production_compagny_id), PRIMARY KEY(serie_id, production_compagny_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE serie_user (serie_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_56F6C27BD94388BD (serie_id), INDEX IDX_56F6C27BA76ED395 (user_id), PRIMARY KEY(serie_id, user_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C461220EA6 FOREIGN KEY (creator_id) REFERENCES creator (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_creator ADD CONSTRAINT FK_889F99C4D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41B34128B91 FOREIGN KEY (network_id) REFERENCES network (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_network ADD CONSTRAINT FK_541DF41BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893949849E4 FOREIGN KEY (original_country_id) REFERENCES original_country (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_original_country ADD CONSTRAINT FK_92526893D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78759F4088 FOREIGN KEY (production_compagny_id) REFERENCES production_compagny (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_production_compagny ADD CONSTRAINT FK_CA1F9A78D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_user ADD CONSTRAINT FK_56F6C27BD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE creator_serie');
        $this->addSql('DROP TABLE network_serie');
        $this->addSql('DROP TABLE user_serie');
        $this->addSql('DROP TABLE production_compagny_serie');
        $this->addSql('DROP TABLE original_country_serie');
    }
}
