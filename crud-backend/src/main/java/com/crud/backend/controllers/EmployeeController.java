package com.crud.backend.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Employee;
import com.crud.backend.services.EmployeeService;

@RestController
@RequestMapping("/funcionarios")

public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/search/{name}")
	public List<Employee> search(@PathVariable String name){
		return employeeService.findByName(name);
	}

	// ----------------- LIST EMPLOYEES
	@GetMapping("/")
	public List<Employee> getAllEmployees() {
		return employeeService.findAll();
	}

	// ------------------ CREATE EMPLOYEE

	@PostMapping("/")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}

	// ----------------- VIEW EMPLOYEE BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
		return employeeService.findById(id);
	}

	// --------------- UPDATE EMPLOYEEE
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
		return employeeService.updateEmployee(id, employee);
	}

	// ---------------- DELETE EMPLOYEE WITH RELATIONS
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id) {
		return employeeService.deleteEmployee(id);
	}
}
