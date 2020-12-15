package com.crud.backend.services.servicesImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.crud.backend.exceptions.ResourceNotFoundException;
import com.crud.backend.models.Function;
import com.crud.backend.repositories.FunctionRepository;
import com.crud.backend.services.FunctionService;

@Service
public class FunctionServiceImpl implements FunctionService {

	@Autowired
	private FunctionRepository functionRepository;

	@Override
	public List<Function> findAll() {
		return functionRepository.findAll(Sort.by(Sort.Direction.ASC, "function"));
	}

	@Override
	public Function save(Function function) {
		return functionRepository.save(function);
	}

	@Override
	public ResponseEntity<Function> findById(Integer id) {
		Function function = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));
		return ResponseEntity.ok(function);
	}

	@Override
	public ResponseEntity<Function> updateFunction(Integer id, Function function) {
		Function f1 = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));

		f1.setFunction(function.getFunction());

		Function updatedFunction = functionRepository.save(function);

		return ResponseEntity.ok(updatedFunction);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> deleteFunction(Integer id) {
		Function function = functionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id" + id));

		functionRepository.delete(function);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

	@Override
	public List<Function> findByName(String function) {
		return functionRepository.findByName(function);
	}

}
