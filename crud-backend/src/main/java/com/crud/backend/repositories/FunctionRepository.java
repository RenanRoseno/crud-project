package com.crud.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.backend.models.Function;

@Repository
public interface FunctionRepository extends JpaRepository<Function, Integer> {

}
