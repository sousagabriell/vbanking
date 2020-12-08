import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user-model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.authService.Login(this.user);
  }

}
