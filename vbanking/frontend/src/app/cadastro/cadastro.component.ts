import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { Registered } from './cadastro.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  registered: Registered = {
    name: 'Gabriel',
    firstname: 'Sousa',
    andress: 'Avenida Nelson Mandela',
    cpf: '8768768',
    cep: '98798798',
    country: 'São `Bernardo do Campo',
    state: 'São Paulo',
  }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void {
    this.cadastroService.create(this.registered).subscribe(() => {
      this.router.navigate(['/login'])
    })

  }
}