import { Component } from '@angular/core';
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
  	transactions: Transaction[] = []
	incomingfile(event: any) 
	  {
	  this.file= event.target.files[0]; 
	  }
	
	 Upload() {
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
			this.rawArray = XLSX.utils.sheet_to_json(worksheet,{raw:true})
			if(this.rawArray.length <= 6){console.log("Pas d'opérations")}
			else {
				for(let i = 6; i < this.rawArray.length; ++i){
					//TODO: date transaction, id manquant
					//this.transactions.push({})
				}
			}
			console.log(this.rawArray);
		}
		fileReader.readAsArrayBuffer(this.file);
	 }
}
