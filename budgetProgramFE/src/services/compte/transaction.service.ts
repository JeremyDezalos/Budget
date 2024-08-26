import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'http://localhost:2501/api/transaction';
  constructor(private http: HttpClient) { }

  addTransaction(transaction: Transaction[]): any {
    return this.http.post<Transaction[]>(this.baseUrl+"/add", transaction);
  }
}
