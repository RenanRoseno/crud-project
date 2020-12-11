package com.crud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Employee;
import com.crud.backend.repositories.EmployeeRepository;

@RestController
@RequestMapping("/crud/")

public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/funcionarios")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
}
