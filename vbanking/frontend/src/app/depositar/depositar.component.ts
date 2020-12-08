import { Component, OnInit } from '@angular/core';
import { DepositarService } from './depositar.service';
import { Deposit } from './depositar.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  deposit: Deposit = {
    name: '',
    value: null
  }

  constructor(private depositarService: DepositarService, private router: Router) { }

  ngOnInit(): void {
  }

  depositar(): void {
    this.depositarService.create(this.deposit).subscribe(() => {
      this.router.navigate(['/dashboard'])
    })
  }

}
