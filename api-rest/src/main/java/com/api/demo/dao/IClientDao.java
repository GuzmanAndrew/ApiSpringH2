package com.api.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.demo.db.Cliente;

public interface IClientDao extends JpaRepository<Cliente, Long> {
	
}
