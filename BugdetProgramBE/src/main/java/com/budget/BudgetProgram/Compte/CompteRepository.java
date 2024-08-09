package com.budget.BudgetProgram.Compte;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompteRepository extends CrudRepository<Compte, Long> {
}
