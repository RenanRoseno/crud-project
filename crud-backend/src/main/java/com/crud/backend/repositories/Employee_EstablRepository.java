package com.crud.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.backend.models.Employee_Establ;

@Repository
public interface Employee_EstablRepository extends JpaRepository<Employee_Establ, Integer> {

}
