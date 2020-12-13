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
import com.crud.backend.models.Establishment;
import com.crud.backend.repositories.EstablishmentRepository;

@RestController
@RequestMapping("/crud/")
public class EstablishmentController {
	@Autowired
	private EstablishmentRepository establishmentRepository;
	
	@GetMapping("/estabelecimentos")
	public List<Establishment> getAllEmployeesEstab(){
		return establishmentRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}
	
	@PostMapping("/estabelecimentos/salvar")
	public Establishment createEstablishment (@RequestBody Establishment establishment) {
		return establishmentRepository.save(establishment);
	}
	
	@GetMapping("/estabelecimentos/{id}")
	public ResponseEntity<Establishment> getEstablishmentById(@PathVariable Integer id) {
		Establishment establishment = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id: " + id));
		return ResponseEntity.ok(establishment);
	}
	
	@PutMapping("/estabelecimentos/{id}")
	public ResponseEntity<Establishment> updateEstablishment(@PathVariable Integer id, @RequestBody Establishment establishment) {
		Establishment estab = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id: " + id));

		estab.setCep(establishment.getCep());
		estab.setComplement(establishment.getComplement());
		estab.setName(establishment.getName());
		estab.setPhone_number(establishment.getPhone_number());
		estab.setStreet(establishment.getStreet());

		Establishment updatedEstablishment = establishmentRepository.save(establishment);

		return ResponseEntity.ok(updatedEstablishment);
	}
	
	
	@DeleteMapping("/estabelecimentos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEstablishment(@PathVariable Integer id) {
		Establishment establishment = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id" + id));

		establishmentRepository.delete(establishment);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}
}
