package com.budget.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.budget.Entity.Compte;

@Repository
public interface CompteRepository extends CrudRepository<Compte, Long> {
}
