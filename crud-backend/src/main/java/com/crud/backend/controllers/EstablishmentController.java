package com.crud.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.backend.models.Establishment;
import com.crud.backend.repositories.EstablishmentRepository;

@RestController
@RequestMapping("/crud/")
public class EstablishmentController {
	@Autowired
	private EstablishmentRepository establishmentRepository;
	
	@GetMapping("/estabelecimentos")
	public List<Establishment> getAllEmployeesEstab(){
		return establishmentRepository.findAll();
	}
}
