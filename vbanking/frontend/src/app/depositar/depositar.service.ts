import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposit } from './depositar.model';


@Injectable({
  providedIn: 'root'
})
export class DepositarService {

  baseUrl = "http://localhost:3005/deposit"

  constructor(private hhtp: HttpClient) { }

  create(deposit: Deposit): Observable<Deposit> {
    return this.hhtp.post<Deposit>(this.baseUrl, deposit)
  }

  read(): Observable<Deposit[]> {
    return this.hhtp.get<Deposit[]>(this.baseUrl)
  }

}
