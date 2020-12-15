package com.crud.backend.services.servicesImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.crud.backend.exceptions.ResourceNotFoundException;
import com.crud.backend.models.Employee;
import com.crud.backend.repositories.EmployeeRepository;
import com.crud.backend.repositories.Employee_EstablRepository;
import com.crud.backend.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	// SETTING RELATION REPOSITORY TO DELETE FUNCTION
	@Autowired
	private Employee_EstablRepository employeeEstabRepository;

	@Override
	public List<Employee> findAll() {
		return employeeRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}

	@Override
	public Employee save(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public ResponseEntity<Employee> findById(Integer id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));

		return ResponseEntity.ok(employee);
	}

	@Override
	public ResponseEntity<Employee> updateEmployee(Integer id, Employee employee) {
		Employee e1 = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id: " + id));

		e1.setCep(employee.getCep());
		e1.setComplement(employee.getComplement());
		e1.setHome_phone(employee.getHome_phone());
		e1.setName(employee.getName());
		e1.setPhone_number(employee.getPhone_number());
		e1.setStreet(employee.getStreet());
		e1.setNumber(employee.getNumber());

		Employee updatedEmployee = employeeRepository.save(employee);

		return ResponseEntity.ok(updatedEmployee);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(Integer id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Funcionário não existe com o id" + id));

		employeeEstabRepository.deleteByEmployeeId(employee.getId());
		employeeRepository.delete(employee);

		Map<String, Boolean> response = new HashMap<>();
		response.put("Excluido", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

	@Override
	public List<Employee> findByName(String name) {
		return employeeRepository.findByName(name);
	}

}
