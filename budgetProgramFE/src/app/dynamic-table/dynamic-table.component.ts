import { ChangeDetectionStrategy } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Compte } from '../../models/compte.model';

@Component({
	selector: 'app-dynamic-table',
	templateUrl: './dynamic-table.component.html',
	styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnInit  {
	@Input() public dataSource: Compte[] = [];
	@Output() selectIDEvent = new EventEmitter<number>();
	selectedCompteID: number = 0
	table = new MatTableDataSource();
	columns: string[] = ['compteID', 'nomUtilisateur', 'nomCompte', 'montant'];
	constructor() {}

	ngOnInit(): void {
		this.table.data = this.dataSource
	}
	ngOnChanges() {
		this.table.data = this.dataSource
	}
	
	click(compteID: number){
		this.selectedCompteID = compteID
		this.selectIDEvent.emit(compteID);
	}
}
