package com.crud.backend.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.Entity;

@Entity
@Table(name = "employees_establ")
public class Employee_Establ {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "id_employee")
	private int id_employee;

	@Column(name = "id_establishment")
	private int id_establishment;

	public Employee_Establ() {

	}

	public Employee_Establ(String name_employee, String name_establishment, int id_employee, int id_Establishment) {
		super();
		this.id_employee = id_employee;
		this.id_establishment = id_Establishment;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getId_employee() {
		return id_employee;
	}

	public void setId_employee(int id_employee) {
		this.id_employee = id_employee;
	}

	public int getId_establishment() {
		return id_establishment;
	}

	public void setId_establishment(int id_Establishment) {
		this.id_establishment = id_Establishment;
	}

}
