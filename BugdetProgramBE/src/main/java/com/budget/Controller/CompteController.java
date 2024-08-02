package com.budget.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.Entity.Compte;
import com.budget.Service.CompteService;

@RestController
@RequestMapping("/api/compte")
public class CompteController {
	@Autowired
	private CompteService compteService;
	
	public CompteController() {
	}
	
	@GetMapping("/getAll")
	public List<Compte> getAll() {
		return compteService.getAll();
	}
	
	@GetMapping("/get/{compteID}")
	public Compte get(@PathVariable("compteID") long compteID) {
		return compteService.get(compteID);
	}
	
	@PostMapping(value = "/add")
	public void addCompte(Compte compte) {
		compteService.addCompte(compte);
	}
}
