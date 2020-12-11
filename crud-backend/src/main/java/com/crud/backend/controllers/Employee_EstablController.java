package com.crud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Employee_Establ;
import com.crud.backend.repositories.Employee_EstablRepository;

@RestController
@RequestMapping("/crud/")
public class Employee_EstablController {
	
	@Autowired
	private Employee_EstablRepository employeeEstabRepository;
	
	@GetMapping("/funcionarios/estabelecimentos")
	public List<Employee_Establ> getAllEmployeesEstab(){
		return employeeEstabRepository.findAll();
	}
}
