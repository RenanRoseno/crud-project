package com.crud.backend.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Entity;

@Entity
@Table(name = "employees_establ")
public class Employee_Establ {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name_employee")
	private String name_employee;

	@Column(name = "name_establishment")
	private String name_establishment;

	@Column(name = "id_employee")
	private int id_employee;

	@Column(name = "id_establishment")
	private int id_Establishment;

	public Employee_Establ() {

	}

	public Employee_Establ(String name_employee, String name_establishment, int id_employee, int id_Establishment) {
		super();
		this.name_employee = name_employee;
		this.name_establishment = name_establishment;
		this.id_employee = id_employee;
		this.id_Establishment = id_Establishment;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName_employee() {
		return name_employee;
	}

	public void setName_employee(String name_employee) {
		this.name_employee = name_employee;
	}

	public String getName_establishment() {
		return name_establishment;
	}

	public void setName_establishment(String name_establishment) {
		this.name_establishment = name_establishment;
	}

	public int getId_employee() {
		return id_employee;
	}

	public void setId_employee(int id_employee) {
		this.id_employee = id_employee;
	}

	public int getId_Establishment() {
		return id_Establishment;
	}

	public void setId_Establishment(int id_Establishment) {
		this.id_Establishment = id_Establishment;
	}

}
