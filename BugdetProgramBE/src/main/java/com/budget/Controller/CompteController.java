package com.budget.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.Service.CompteService;

@RestController
@RequestMapping("/api/compte")
public class CompteController {
	@Autowired
	private CompteService compteService;
	
	public CompteController() {
	}
	@GetMapping("/getAll")
	public void getAll() {
		compteService.getAll();
	}
	@GetMapping("/get/{id}")
	public void get(@PathVariable("id") long compteId) {
		compteService.get(compteId);
	}
}
