package com.crud.backend.controllers;

import java.util.HashMap;
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

import com.crud.backend.exceptions.ResourceNotFoundException;
import com.crud.backend.models.Function;
import com.crud.backend.repositories.FunctionRepository;

@RestController
@RequestMapping("/crud/")
public class FunctionController {
	@Autowired
	private FunctionRepository functionRepository;

	// ------------- LIST FUNCTIONS
	@GetMapping("/funcoes")
	public List<Function> getAllFunctions() {
		return functionRepository.findAll();
	}

	// ------------- CREATE FUNCTIONS
	@PostMapping("funcoes/salvar")
	public Function createFunction(@RequestBody Function function) {
		return functionRepository.save(function);
	}

	// ------------- VIEW FUNCTION BY ID
	@GetMapping("/funcoes/{id}")
	public ResponseEntity<Function> getFunctionById(@PathVariable Integer id) {
		Function function = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));
		return ResponseEntity.ok(function);
	}

	// -------------- UPDATE FUNCTION
	@PutMapping("/funcoes/{id}")
	public ResponseEntity<Function> updateFunction(@PathVariable Integer id, @RequestBody Function function) {
		Function f1 = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));

		f1.setFunction(function.getFunction());

		Function updatedFunction = functionRepository.save(function);

		return ResponseEntity.ok(updatedFunction);
	}

	// ------------- DELETE FUNCTION
	@DeleteMapping("/funcoes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFunction(@PathVariable Integer id) {
		Function function = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id" + id));

		functionRepository.delete(function);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}
}
