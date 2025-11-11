import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public email: string = "";
  public password: string = "";
  public rememberMe: boolean = false;

  
  constructor(private router: Router) { }

  public handleSubmit(): void {
    
    
    console.log('Login:', this.email, this.password);
    
    
    this.router.navigate(['/sistema/admin-dashboard']); 
  }


  public handleBackClick(): void {
    
    this.router.navigate(['/']); 
  }
}