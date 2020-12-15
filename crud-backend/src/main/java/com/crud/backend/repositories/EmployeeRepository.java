package com.crud.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.crud.backend.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	@Modifying
	@Transactional(readOnly = false)
	@Query("SELECT e FROM Employee e where name LIKE %?1%")
	List<Employee> findByName(String name);
}
