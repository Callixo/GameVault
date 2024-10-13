import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  
  constructor(private router: Router) {}

  // Função para logout
  logout() {
    // Aqui você pode limpar o estado de autenticação, token, etc.
    console.log('Usuário deslogado');
    
    // Redireciona para a página de login após o logout
    this.router.navigate(['/login']);
  }
}

