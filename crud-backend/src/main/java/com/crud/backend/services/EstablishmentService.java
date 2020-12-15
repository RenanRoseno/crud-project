package com.crud.backend.services;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.crud.backend.models.Establishment;

public interface EstablishmentService {
	List<Establishment> findAll();
	
	Establishment save(Establishment establishment);
	
	ResponseEntity<Establishment> findById(Integer id);
	
	ResponseEntity<Establishment> updateEstablishment(Integer id, Establishment establishment);
	
	ResponseEntity<Map<String, Boolean>> deleteEstablishment(Integer id);
	
	List<Establishment> findByName(String name);
}
