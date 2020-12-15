package com.crud.backend.services.servicesImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.crud.backend.exceptions.ResourceNotFoundException;
import com.crud.backend.models.Establishment;
import com.crud.backend.repositories.Employee_EstablRepository;
import com.crud.backend.repositories.EstablishmentRepository;
import com.crud.backend.services.EstablishmentService;

@Service
public class EstablishmentServiceImpl implements EstablishmentService {

	@Autowired
	private EstablishmentRepository establishmentRepository;

	// SETTING RELATION REPOSITORY TO DELETE FUNCTION
	@Autowired
	private Employee_EstablRepository employeeEstabRepository;

	@Override
	public List<Establishment> findAll() {
		return establishmentRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}

	@Override
	public Establishment save(Establishment establishment) {
		return establishmentRepository.save(establishment);
	}

	@Override
	public ResponseEntity<Establishment> findById(Integer id) {
		Establishment establishment = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id: " + id));
		return ResponseEntity.ok(establishment);
	}

	@Override
	public ResponseEntity<Establishment> updateEstablishment(Integer id, Establishment establishment) {
		Establishment estab = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id: " + id));

		estab.setCep(establishment.getCep());
		estab.setComplement(establishment.getComplement());
		estab.setName(establishment.getName());
		estab.setPhone_number(establishment.getPhone_number());
		estab.setNumber(establishment.getNumber());
		estab.setStreet(establishment.getStreet());

		Establishment updatedEstablishment = establishmentRepository.save(establishment);

		return ResponseEntity.ok(updatedEstablishment);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> deleteEstablishment(Integer id) {
		Establishment establishment = establishmentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Estabelecimento não existe com o id" + id));

		employeeEstabRepository.deleteByEstablishmentId(establishment.getId());
		establishmentRepository.delete(establishment);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

	@Override
	public List<Establishment> findByName(String name) {
		return establishmentRepository.findByName(name);
	}

}
