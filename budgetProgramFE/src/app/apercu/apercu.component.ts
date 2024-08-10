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
	constructor(private compteService: CompteService){

	}
	data:Compte[] = [];
	getAll(){
		this.compteService.getComptes().subscribe((compte: Compte[]) => {
			this.data = compte
			console.log(compte)
		})
	}	
}
