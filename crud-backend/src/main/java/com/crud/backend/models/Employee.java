package com.crud.backend.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Entity;

@Entity
@Table(name = "employees")

public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "street")
	private String street;

	@Column(name = "complement")
	private String complement;

	@Column(name = "cep")
	private String cep;

	@Column(name = "phone_number")
	private String phone_number;

	@Column(name = "home_phone")
	private String home_phone;

	@Column(name = "id_function")
	private int id_function;

	public Employee() {

	}

	public Employee(String name, String complement, String cep, String phone_number, String home_phone,
			int id_function) {
		super();
		this.name = name;
		this.complement = complement;
		this.cep = cep;
		this.phone_number = phone_number;
		this.home_phone = home_phone;
		this.id_function = id_function;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getHome_phone() {
		return home_phone;
	}

	public void setHome_phone(String home_phone) {
		this.home_phone = home_phone;
	}

	public int getId_function() {
		return id_function;
	}

	public void setId_function(int id_function) {
		this.id_function = id_function;
	}

}
