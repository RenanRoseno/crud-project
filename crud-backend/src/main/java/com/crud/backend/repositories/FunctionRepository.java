package com.crud.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.crud.backend.models.Function;

@Repository
public interface FunctionRepository extends JpaRepository<Function, Integer> {
	@Modifying
	@Transactional(readOnly = false)
	@Query("SELECT f FROM Function f where function LIKE %?1%")
	List<Function> findByName(String function);
}
