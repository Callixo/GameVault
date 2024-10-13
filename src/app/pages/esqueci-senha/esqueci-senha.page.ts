import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage {
  constructor(private router: Router) {}

  recuperarSenha() {
    // Aqui você pode implementar a lógica de recuperação de senha.
    // Por enquanto, redireciona de volta para o login.
    this.router.navigate(['/login']);
  }
}

