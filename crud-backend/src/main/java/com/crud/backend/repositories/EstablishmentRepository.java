package com.crud.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.backend.models.Establishment;

@Repository
public interface EstablishmentRepository extends JpaRepository<Establishment, Integer> {

}
