import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  baseUrl = 'http://localhost:2501/api/compte';


  constructor(private http: HttpClient) { }
  getComptes(): Observable<Object>{
    return this.http.get(this.baseUrl+"/getAll");
  }
}
