import { Component, OnInit } from '@angular/core';
import { DepositarService } from '../depositar/depositar.service';
import { Deposit } from '../depositar/depositar.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  deposits: Deposit[]

  constructor(private depositService: DepositarService) { }

  ngOnInit(): void {
    this.depositService.read().subscribe(deposits => {
      this.deposits = deposits
    })
  }

}
