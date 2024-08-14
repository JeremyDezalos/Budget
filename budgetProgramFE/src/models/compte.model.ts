import { Transaction } from './transaction.model';

export interface Compte {
    compteid: number;
    nomUtilisateur: string;
    nomCompte: string;
    montant: number;
	transactions: Transaction[]
}
