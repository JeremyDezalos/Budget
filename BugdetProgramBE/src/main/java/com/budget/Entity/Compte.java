package com.budget.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;	

@Entity
@Table(name = "Compte")
public class Compte {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;
  private String nomUtilisateur;
  private String nomCompte;
  private int montant;

  protected Compte() {}

  public Compte(String nomUtilisateur, String nomCompte, int montant) {
    this.setNomUtilisateur(nomUtilisateur);
    this.setNomCompte(nomCompte);
    this.setMontant(montant);
  }

public int getMontant() {
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

}