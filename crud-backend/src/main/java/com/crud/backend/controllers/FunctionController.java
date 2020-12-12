package com.crud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Function;
import com.crud.backend.repositories.FunctionRepository;

@RestController
@RequestMapping("/crud/")
public class FunctionController {
	@Autowired
	private FunctionRepository functionRepository;
	
	@GetMapping("/funcoes")
	public List<Function> getAllEmployeesEstab(){
		return functionRepository.findAll();
	}
	
	@PostMapping("funcoes/cadastrar")
	public Function createFunction(@RequestBody Function function) {
		return functionRepository.save(function);
	}
}

