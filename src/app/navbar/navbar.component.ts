import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminId;
  adminName;
  isLoggedIn:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.adminId = localStorage.getItem('adminId');
    this.adminName = localStorage.getItem('adminName')
    console.log(this.adminName)

    if(this.adminId) {
      this.isLoggedIn = true
    } 
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/'])
  }

}
