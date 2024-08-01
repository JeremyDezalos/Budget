package com.budget.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.budget.Entity.Compte;
import com.budget.Repository.CompteRepository;

@Service
public class CompteService {
	@Autowired
	public CompteRepository compteRepository;
	
	public CompteService(CompteRepository compteRepository) {
	}
	
	public List<Compte> getAll(){
	    List<Compte> list = new ArrayList<Compte>();
	    for (Compte item : compteRepository.findAll()) {
	        list.add(item);
	    }
	    return list;
	}
	
	public Compte get(long id){
		//handle null cases
		return compteRepository.findById(id).get();
	}
}
