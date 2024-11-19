import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  email = ''; // Campo para capturar o email
  password = ''; // Campo para capturar a senha

  constructor(private authService: AuthService, private router: Router) {}

  async cadastrar() {
    try {
      // Tenta registrar o usuário com os dados fornecidos
      await this.authService.register(this.email, this.password);
      alert('Cadastro realizado com sucesso!');
      // Redireciona para a página de login após o cadastro
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  }
}


