package br.com.janes.ecommerce.repository;

import br.com.janes.ecommerce.domain.Brand;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Brand entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BrandRepository extends MongoRepository<Brand, String> {

}
