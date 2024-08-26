package com.budget.BudgetProgram.Transaction;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transaction")
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
	public void addTransaction(@RequestBody Transaction transactions[]) {
		for(int i = 0; i < transactions.length; ++i) {
			System.out.println(transactions[i].getLibelle());
		}
		transactionService.addTransactions(transactions);
	}
}
