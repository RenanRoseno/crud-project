package com.crud.backend.services;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.crud.backend.models.Function;

public interface FunctionService {

	List<Function> findAll();

	Function save(Function function);

	ResponseEntity<Function> findById(Integer id);

	ResponseEntity<Function> updateFunction(Integer id, Function function);
	
	ResponseEntity<Map<String, Boolean>> deleteFunction(Integer id);
	
	List<Function> findByName(String function);
}
