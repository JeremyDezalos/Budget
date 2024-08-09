package com.budget.BudgetProgram.Compte;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		if(compteRepository.findById(id).isEmpty()) {
			return null;
		}
		return compteRepository.findById(id).get();
	}
	
	public void addCompte(Compte compte) {
		compteRepository.save(compte);
	}
}
