package com.budget.BudgetProgram.Transaction;

import com.budget.BudgetProgram.Compte.Compte;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
	
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="compteID", nullable=false)
    @JsonBackReference
    private Compte compte;
    
    protected Transaction() {}
    
	public Transaction(String libelle, boolean ajout, double montant, Compte compte) {
	    this.setLibelle(libelle);
	    this.setMontant(montant);
	    this.setAjout(ajout);
	    this.setCompte(compte);
	}
    
	public Long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(Long id) {
		this.transactionID = id;
	}

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
	
	public Compte getCompte() {
		return compte;
	}
	
	public void setCompte(Compte compte) {
		this.compte = compte;
	}
}
