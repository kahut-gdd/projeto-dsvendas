package com.kahutdev.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kahutdev.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
