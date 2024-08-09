package com.budget.BudgetProgram.Transaction;

import java.util.Collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
	@Query(
			  value = "SELECT * FROM Transaction t WHERE t.compteID = ?1", 
			  nativeQuery = true)
			Collection<Transaction> getAllByCompteID(long compteID);
}
