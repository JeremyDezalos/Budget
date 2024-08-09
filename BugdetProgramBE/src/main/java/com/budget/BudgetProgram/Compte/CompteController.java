package com.budget.BudgetProgram.Compte;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/compte")
public class CompteController {
	@Autowired
	private CompteService compteService;
	
	public CompteController() {	}
	
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
