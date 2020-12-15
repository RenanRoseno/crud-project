package com.crud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Employee_Establ;
import com.crud.backend.services.Employee_EstablService;

@RestController
@RequestMapping("/funcionarios-estabelecimentos")
public class Employee_EstablController {

	
	@Autowired
	Employee_EstablService employeeEstabService;

	// --------------- LIST RELATION
	@GetMapping("/")
	public List<Employee_Establ> getAllEmployeesEstab() {
		return employeeEstabService.findAll();
	}

	// ----------- CREATE RELATION
	@PostMapping("/")
	public Employee_Establ createEmployee_Establ(@RequestBody Employee_Establ employee_establ) {
		return employeeEstabService.save(employee_establ);
	}

}
