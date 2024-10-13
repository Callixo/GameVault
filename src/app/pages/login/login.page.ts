import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  login() {
    // Aqui você pode adicionar a lógica de login, como validação de email e senha.
    // Por enquanto, vamos apenas redirecionar para a página principal (tabs) após o login.
    
    this.router.navigate(['/tabs']);
  }
}
