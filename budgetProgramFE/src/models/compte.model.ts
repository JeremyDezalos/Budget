import { Transaction } from './transaction.model';

export interface Compte {
    compteid: number;
    nomtutilisateur: string;
    nomcompte: string;
    montant: number;
	transactions: Transaction[]
}
