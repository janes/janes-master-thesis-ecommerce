package br.com.janes.ecommerce.service;

import br.com.janes.ecommerce.domain.Brand;
import br.com.janes.ecommerce.repository.BrandRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


/**
 * Service Implementation for managing Brand.
 */
@Service
public class BrandService {

    private final Logger log = LoggerFactory.getLogger(BrandService.class);

    private final BrandRepository brandRepository;

    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    /**
     * Save a brand.
     *
     * @param brand the entity to save
     * @return the persisted entity
     */
    public Brand save(Brand brand) {
        log.debug("Request to save Brand : {}", brand);
        return brandRepository.save(brand);
    }

    /**
     *  Get all the brands.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Brand> findAll(Pageable pageable) {
        log.debug("Request to get all Brands");
        return brandRepository.findAll(pageable);
    }

    /**
     *  Get one brand by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Brand findOne(String id) {
        log.debug("Request to get Brand : {}", id);
        return brandRepository.findOne(id);
    }

    /**
     *  Delete the  brand by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Brand : {}", id);
        brandRepository.delete(id);
    }
}
