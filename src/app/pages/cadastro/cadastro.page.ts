import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  constructor(private router: Router) {}

  cadastrar() {
    // Aqui você pode implementar a lógica de cadastro.
    // Após o cadastro, redirecionar para a página de login ou para as tabs.
    this.router.navigate(['/login']);
  }
}

