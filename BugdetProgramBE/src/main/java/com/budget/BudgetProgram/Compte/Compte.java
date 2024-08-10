package com.budget.BudgetProgram.Compte;

import java.util.Set;

import com.budget.BudgetProgram.Transaction.Transaction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;	

@Entity
@Getter
@Setter
@Table(name = "Compte")
public class Compte {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "compteid", nullable=false, unique=true)
  	private Long compteID;
	@Column(name = "nomutilisateur", nullable=false)
	private String nomUtilisateur;
	@Column(name = "nomcompte", nullable=false)
	private String nomCompte;
	@Column(name = "montant", nullable=false)
	private double montant;
	
    @OneToMany(mappedBy="compte")
    private Set<Transaction> transactions;

	protected Compte() {}

	public Compte(String nomUtilisateur, String nomCompte, int montant, Set<Transaction> transactions) {
	    this.setNomUtilisateur(nomUtilisateur);
	    this.setNomCompte(nomCompte);
	    this.setMontant(montant);
	    this.transactions = transactions;
	}

	public double getMontant() {
		return montant;
	}
	
	public void setMontant(int montant) {
		this.montant = montant;
	}
	
	public String getNomCompte() {
		return nomCompte;
	}
	
	public void setNomCompte(String nomCompte) {
		this.nomCompte = nomCompte;
	}
	
	public String getNomUtilisateur() {
		return nomUtilisateur;
	}
	
	public void setNomUtilisateur(String nomUtilisateur) {
		this.nomUtilisateur = nomUtilisateur;
	}
	
    public Set<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(Set<Transaction> transactions) {
		this.transactions = transactions;
	}

}