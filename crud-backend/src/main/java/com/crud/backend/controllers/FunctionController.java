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

import com.crud.backend.models.Function;
import com.crud.backend.services.FunctionService;

@RestController
@RequestMapping("/funcoes")
public class FunctionController {
	@Autowired
	private FunctionService functionService;
	
	@GetMapping("/search/{name}")
	public List<Function> searchFunction(@PathVariable String name) {
		return functionService.findByName(name);
	}

	// ------------- LIST FUNCTIONS
	@GetMapping("/")
	public List<Function> getAllFunctions() {
		return functionService.findAll();
	}

	// ------------- CREATE FUNCTIONS
	@PostMapping("/")
	public Function createFunction(@RequestBody Function function) {
		return functionService.save(function);
	}

	// ------------- VIEW FUNCTION BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Function> getFunctionById(@PathVariable Integer id) {
		return functionService.findById(id);
	}

	// -------------- UPDATE FUNCTION
	@PutMapping("/{id}")
	public ResponseEntity<Function> updateFunction(@PathVariable Integer id, @RequestBody Function function) {
		return functionService.updateFunction(id, function);
	}

	// ------------- DELETE FUNCTION
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFunction(@PathVariable Integer id) {
		return functionService.deleteFunction(id);
	}
}
