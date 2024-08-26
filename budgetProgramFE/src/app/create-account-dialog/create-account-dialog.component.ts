import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Compte } from '../../models/compte.model';
import { Transaction } from '../../models/transaction.model';


@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrl: './create-account-dialog.component.scss'
})
export class CreateAccountDialogComponent {
	form!: FormGroup;
	nomUtilisateur: string;
    nomCompte: string;
    montant: number;

	constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CreateAccountDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: Compte) {

        this.nomUtilisateur = data.nomUtilisateur;
		this.nomCompte = data.nomCompte;
		this.montant = data.montant;
    }

	ngOnInit() {
        this.form = this.fb.group({
            nomUtilisateur: [this.nomUtilisateur, []],
            nomCompte: [this.nomCompte, []],
			montant: [this.montant, []]
        });
    }

	save(){
		this.dialogRef.close(this.form.value);
	}
	close(){
		this.dialogRef.close();
	}
}
