package com.crud.backend.services;
import java.util.List;

import com.crud.backend.models.Employee_Establ;

public interface Employee_EstablService {
	List<Employee_Establ> findAll();
	
	Employee_Establ save(Employee_Establ ee);
}
