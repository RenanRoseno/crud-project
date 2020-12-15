package com.crud.backend.services;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.crud.backend.models.Employee;

public interface EmployeeService {
	List<Employee> findAll();
	
	Employee save(Employee employee);
	
	ResponseEntity<Employee> findById(Integer id);
	
	ResponseEntity<Employee> updateEmployee(Integer id, Employee employee);
	
	ResponseEntity<Map<String, Boolean>> deleteEmployee(Integer id);
	
	List<Employee> findByName(String name);
	
}
