import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){

  }

  HandleSubmit(){
    console.log("Hello world");
    // handle login
    sessionStorage.setItem("idtoken","token");
    this.router.navigate(["/home"])
  }
}
