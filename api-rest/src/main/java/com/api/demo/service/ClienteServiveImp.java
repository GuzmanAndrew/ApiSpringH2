package com.api.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.demo.dao.IClientDao;
import com.api.demo.db.Cliente;

@Service
public class ClienteServiveImp implements IClienteService {

	@Autowired
	IClientDao iClientDao;
	
	@Override
	public List<Cliente> listarClientes() {
		return iClientDao.findAll();
	}

	@Override
	public Cliente guardarCliente(Cliente cliente) {
		return iClientDao.save(cliente);
	}

	@Override
	public Cliente clienteId(Long id) {
		return iClientDao.findById(id).get();
	}

	@Override
	public Cliente actualizarCliente(Cliente cliente) {
		return iClientDao.save(cliente);
	}

	@Override
	public void eliminarCliente(Long id) {
		iClientDao.deleteById(id);
	}
	
}
