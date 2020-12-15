package com.crud.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.crud.backend.models.Employee_Establ;

@Repository
public interface Employee_EstablRepository extends JpaRepository<Employee_Establ, Integer> {
	
	@Modifying
	@Transactional(readOnly = false)
	@Query("DELETE FROM Employee_Establ u where u.id_establishment = ?1")
	int deleteByEstablishmentId(int id_establishment);
	
	
	@Modifying
	@Transactional(readOnly = false)
	@Query("DELETE FROM Employee_Establ u where u.id_employee = ?1")
	int deleteByEmployeeId(int id_employee);
}
