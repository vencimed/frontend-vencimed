import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public email: string = "";
  public password: string = "";
  public rememberMe: boolean = false;
  passwordFieldType = 'password';

  constructor(private router: Router) { }

  
  public handleSubmit(loginForm: NgForm): void {
    
    
    if (loginForm.invalid) {
      
      Object.keys(loginForm.controls).forEach(key => {
        loginForm.controls[key].markAsTouched();
      });
      console.log('Formulário inválido');
      return; 
    }

    
    console.log('Login:', this.email, this.password);
    this.router.navigate(['/sistema/admin-dashboard']); 
  }

  public handleBackClick(): void {
    this.router.navigate(['/']); 
  }

  handleRecuperarSenhaClick(): void {
    this.router.navigate(['/recuperar-senha']); 
  }

  handleRegisterClick(): void {
    this.router.navigate(['/register']); 
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}