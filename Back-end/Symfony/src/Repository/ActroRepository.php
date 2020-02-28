<?php

namespace App\Repository;

use App\Entity\Actro;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Actro|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actro|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actro[]    findAll()
 * @method Actro[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActroRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actro::class);
    }

    // /**
    //  * @return Actro[] Returns an array of Actro objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Actro
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
