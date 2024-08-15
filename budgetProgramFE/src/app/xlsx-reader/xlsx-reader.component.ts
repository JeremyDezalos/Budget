import { Component, Input } from '@angular/core';
import { Compte } from '../../models/compte.model';

import * as XLSX from 'xlsx';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-xlsx-reader',
  templateUrl: './xlsx-reader.component.html',
  styleUrl: './xlsx-reader.component.scss'
})
export class XlsxReaderComponent {
	arrayBuffer:any;
	file:any;
 	rawArray:any;
	@Input() public selectedAccount: number = -1;
  	transactions: Transaction[] = []
	incomingfile(event: any) 
	  {
	  this.file= event.target.files[0]; 
	  }
	
	 Upload() {
		if(this.file == null){
			alert("Pas de fichier excel selectionné")
			return
		}
		else if(this.selectedAccount == -1){
			alert("Pas de compte selectionné")
			return
		}
		let fileReader = new FileReader();
		fileReader.onload = (e) => {
			this.arrayBuffer = fileReader.result;
			var data = new Uint8Array(this.arrayBuffer);
			var arr = new Array();
			for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
			var bstr = arr.join("");
			var workbook = XLSX.read(bstr, {type:"binary"});
			var first_sheet_name = workbook.SheetNames[0];
			var worksheet = workbook.Sheets[first_sheet_name];
			this.rawArray = XLSX.utils.sheet_to_json(worksheet,{raw:true, header: ['date', 'libelle', 'debit', 'credit', 'montant']})
			if(this.rawArray.length <= 6){console.log("Pas d'opérations")}
			else {
				let transactions: Transaction[] = []
				for(let i = 7; i < this.rawArray.length; ++i){
					let rawtransaction = this.rawArray[i]
					let ajout: boolean = rawtransaction.debit == ""
					let transaction: Transaction = {transactionid: null, libelle: rawtransaction.libelle,ajout: ajout, montant: rawtransaction.montant, compteid: this.selectedAccount}
					transactions.push(transaction)
				}
				console.log(transactions)
				//TODO push to the DB
			}
			
		}
		fileReader.readAsArrayBuffer(this.file);
	 }
}
