package com.crud.backend.services.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.backend.models.Employee_Establ;
import com.crud.backend.repositories.Employee_EstablRepository;
import com.crud.backend.services.Employee_EstablService;

@Service
public class Employee_EstablServiceImpl implements Employee_EstablService{
	
	@Autowired
	private Employee_EstablRepository employeeEstabRepository;
	
	@Override
	public List<Employee_Establ> findAll() {
		return employeeEstabRepository.findAll();
	}

	@Override
	public Employee_Establ save(Employee_Establ ee) {
		return employeeEstabRepository.save(ee);
	}
	
	
}
