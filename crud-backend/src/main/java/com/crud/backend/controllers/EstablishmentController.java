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

import com.crud.backend.models.Establishment;
import com.crud.backend.services.EstablishmentService;

@RestController
@RequestMapping("/estabelecimentos")
public class EstablishmentController {

	@Autowired
	private EstablishmentService establishmentService;

	@GetMapping("/search/{name}")
	public List<Establishment> searchEstablishment(@PathVariable String name) {
		return establishmentService.findByName(name);
	}
	// --------- LIST ESTABLISHMENTS
	@GetMapping("/")
	public List<Establishment> getAllEmployeesEstab() {
		return establishmentService.findAll();
	}

	// ---------- CREATE ESTABLISHMENTS
	@PostMapping("/")
	public Establishment createEstablishment(@RequestBody Establishment establishment) {
		return establishmentService.save(establishment);
	}

	// ----------- VIEW ESTABLISHMENT BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Establishment> getEstablishmentById(@PathVariable Integer id) {
		return establishmentService.findById(id);
	}

	// ------------ UPDATE ESTABLISHMENT
	@PutMapping("/{id}")
	public ResponseEntity<Establishment> updateEstablishment(@PathVariable Integer id,
			@RequestBody Establishment establishment) {
		return establishmentService.updateEstablishment(id, establishment);
	}

	// ------------ DELETE ESTABLISHMENT WITH RELATIONS
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEstablishment(@PathVariable Integer id) {
		return establishmentService.deleteEstablishment(id);
	}
}
