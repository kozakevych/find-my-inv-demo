import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName = 'admin'

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  public get isUserAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogoutClick() {
    this.authService.logoutUser();
  }
}
