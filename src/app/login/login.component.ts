import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  login() {
    localStorage.setItem('adminId', '1000');
    localStorage.setItem('adminName', 'Manthan')
    this.router.navigate(['/'])
  }

}
