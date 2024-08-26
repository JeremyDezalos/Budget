package com.budget.BudgetProgram.Transaction;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
	@Autowired
	public TransactionRepository transactionRepository;
	
	public TransactionService(TransactionRepository transactionRepository) {
	}
	
	public List<Transaction> getAllByCompteID(long compteID){
	    List<Transaction> list = new ArrayList<Transaction>();
	    for (Transaction item : transactionRepository.getAllByCompteID(compteID)) {
	        list.add(item);
	    }
	    return list;
	}
	
	public Transaction get(long id){
		if(transactionRepository.findById(id).isEmpty()) {
			return null;
		}
		return transactionRepository.findById(id).get();
	}
	
	public void addTransactions(Transaction transactions[]) {
		transactionRepository.saveAll(Arrays.asList(transactions));
	}
}
