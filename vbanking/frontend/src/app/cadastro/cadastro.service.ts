import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registered } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3005/registered"

  constructor(private hhtp: HttpClient) { }

  create(registered: Registered): Observable<Registered> {
    return this.hhtp.post<Registered>(this.baseUrl, registered)
  }
}
