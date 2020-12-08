import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { User } from './user-model';

@Injectable()

export class AuthService {


  public userAuthentic: boolean = false;

  constructor(private router: Router) { }

  Login(user: User) {
    if (user.name === "Gabriel" &&
      user.cpf === "8768768") {

      this.userAuthentic = true;


      this.router.navigate(['/dashboard']);
    } else {
      this.userAuthentic = false;
    }
  }
}
