import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { CompteService } from '../../services/compte/compte.service';
import { Compte } from '../../models/compte.model';

@Component({
	selector: 'app-apercu',
	templateUrl: './apercu.component.html',
	styleUrl: './apercu.component.scss'
})
export class ApercuComponent {
	selectedAccount: number = -1
	constructor(private compteService: CompteService){

	}
	comptes:Compte[] = [{compteID:1, montant:30, nomCompte:"a", nomUtilisateur: "a", transactions:[]}];
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
}
