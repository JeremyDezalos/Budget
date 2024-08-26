import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { CompteService } from '../../services/compte/compte.service';
import { Compte } from '../../models/compte.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-apercu',
	templateUrl: './apercu.component.html',
	styleUrl: './apercu.component.scss'
})
export class ApercuComponent {
	selectedAccount: number = -1
	constructor(private compteService: CompteService, private dialog: MatDialog, private router: Router) {
		
	}
	comptes:Compte[] = [];
	getAll(){
		this.compteService.getComptes().subscribe((compte: Compte[]) => {
			this.comptes = compte
			console.log(compte)
		})
	}	

	selectAccount(compteID: number) {
		console.log(compteID)
		this.selectedAccount = compteID
	}

	openDialog() {
		const dialogConfig = new MatDialogConfig<Compte>();
	
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
	
		dialogConfig.data = {
			compteID: 0,
			nomCompte: "Le compte de Jean Yves",
			nomUtilisateur: "Jean Yves",
			montant: 0,
			transactions: []
		}
		
		const dialogRef = this.dialog.open(CreateAccountDialogComponent, dialogConfig);
	
		dialogRef.afterClosed().subscribe(
			data => {
				data.compteID = 0;
				data.transactions = [];
				console.log("Dialog output:", data);
				this.addAccount(data)
			}
		);    
	}

	addAccount(compte: Compte){
		this.compteService.addCompte(compte).subscribe({
			error: (error: any) => {
				console.error('Erreur lors de la création du compte', error);
			}
		})
	}

	openAccount(){
		this.router.navigate(["/compte"])
	}
}
