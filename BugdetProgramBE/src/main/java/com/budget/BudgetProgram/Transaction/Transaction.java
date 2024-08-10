package com.budget.BudgetProgram.Transaction;

import com.budget.BudgetProgram.Compte.Compte;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Transactions")
public class Transaction {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "transactionid", nullable=false, unique=true)
  	private Long transactionID;
	
	@Column(name = "libelle", nullable=false)
	private String libelle;
	
	@Column(name = "ajout", nullable=false)
	private boolean ajout;
	
	@Column(name = "montant", nullable=false)
	private double montant;
	
    @ManyToOne
    @JoinColumn(name="compteID", nullable=false)
    private Compte compte;

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	public boolean isAjout() {
		return ajout;
	}

	public void setAjout(boolean ajout) {
		this.ajout = ajout;
	}

	public double getMontant() {
		return montant;
	}

	public void setMontant(double montant) {
		this.montant = montant;
	}
}
