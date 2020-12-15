package com.crud.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.crud.backend.models.Establishment;

@Repository
public interface EstablishmentRepository extends JpaRepository<Establishment, Integer> {
	@Modifying
	@Transactional(readOnly = false)
	@Query("SELECT e FROM Establishment e where name LIKE %?1%")
	List<Establishment> findByName(String name);
}
