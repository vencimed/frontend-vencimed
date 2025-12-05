import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  step = 1; // 1 ou 2

  // Etapa 1
  cpf = '';
  fullName = '';
  birthDate = '';
  gender = '';
  phone = '';

  // Etapa 2
  email = '';
  password = '';
  passwordFieldType: 'password' | 'text' = 'password';

  constructor(private router: Router) {}
  
  ngOnInit() {
    
  }

  handleBackClick(): void {
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  nextStep(form: NgForm): void {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key =>
        form.controls[key].markAsTouched()
      );
      return;
    }
    this.step = 2;
  }

  previousStep(): void {
    this.step = 1;
  }

  submit(form: NgForm): void {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key =>
        form.controls[key].markAsTouched()
      );
      return;
    }

    const payload = {
      cpf: this.cpf,
      fullName: this.fullName,
      birthDate: this.birthDate,
      gender: this.gender,
      phone: this.phone,
      email: this.email,
      password: this.password
    };

    console.log('Cadastro realizado:', payload);

    // depois você coloca a chamada para a API / navegação real
    this.router.navigate(['/sistema/admin-dashboard']);
  }
}
