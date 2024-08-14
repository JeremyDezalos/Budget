import { ChangeDetectionStrategy } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
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

	constructor() {}

	ngOnInit(): void {
	}

}
