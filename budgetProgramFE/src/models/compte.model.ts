import { Transaction } from './transaction.model';

export interface Compte {
    compteID: number;
    nomUtilisateur: string;
    nomCompte: string;
    montant: number;
	transactions: Transaction[]
}
