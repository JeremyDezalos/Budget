export interface Transaction {
    transactionid: number | null;
    libelle: string;
    ajout: boolean;
    montant: number;
    compteid: number;
}
