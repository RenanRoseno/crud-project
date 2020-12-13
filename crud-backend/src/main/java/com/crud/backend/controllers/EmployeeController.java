package com.crud.backend.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.exceptions.ResourceNotFoundException;
import com.crud.backend.models.Employee;
import com.crud.backend.repositories.EmployeeRepository;

@RestController
@RequestMapping("/crud/")

public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/funcionarios")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}

	@PostMapping("/funcionarios/salvar")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	@GetMapping("/funcionarios/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));
		return ResponseEntity.ok(employee);
	}

	@PutMapping("/funcionarios/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
		Employee e1 = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));

		e1.setCep(employee.getCep());
		e1.setComplement(employee.getComplement());
		e1.setHome_phone(employee.getHome_phone());
		e1.setName(employee.getName());
		e1.setPhone_number(employee.getPhone_number());
		e1.setStreet(employee.getStreet());
		e1.setNumber(employee.getNumber());

		Employee updatedEmployee = employeeRepository.save(employee);

		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/funcionarios/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id" + id));

		employeeRepository.delete(employee);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}
}
