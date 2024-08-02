package com.budget.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.budget.Entity.Transaction;
import com.budget.Service.TransactionService;

@RestController
public class TransactionController {

	@Autowired
	private TransactionService transactionService;
	
	public TransactionController() {
	}
	
	@GetMapping("/getAll/{compteID}")
	public List<Transaction> getAllByCompteID(@PathVariable("compteID") long compteID) {
		return transactionService.getAllByCompteID(compteID);
	}
	
	@GetMapping("/get/{transactionID}")
	public Transaction get(@PathVariable("transactionID") long transactionID) {
		return transactionService.get(transactionID);
	}
	
	@PostMapping(value = "/add")
	public void addCompte(Transaction transaction) {
		transactionService.addTransaction(transaction);
	}
}
