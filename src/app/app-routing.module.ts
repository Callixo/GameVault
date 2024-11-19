import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Rota para a página de login
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  // Rota para a página de cadastro
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/cadastro/cadastro.module').then((m) => m.CadastroPageModule),
  },
  // Rota para recuperação de senha
  {
    path: 'esqueci-senha',
    loadChildren: () =>
      import('./pages/esqueci-senha/esqueci-senha.module').then(
        (m) => m.EsqueciSenhaPageModule
      ),
  },
  // Rota para as tabs (página principal após login)
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  // Rota com parâmetro para detalhes de jogos
  {
    path: 'game-details/:id', // Definindo a rota com parâmetro ID
    loadChildren: () =>
      import('./game-details/game-details.module').then(
        (m) => m.GameDetailsPageModule
      ),
  },
  // Rota inicial que redireciona para login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // Rota para a tab4 (se necessário)
  {
    path: 'tab4',
    loadChildren: () =>
      import('./pages/tabs/tab4/tab4.module').then((m) => m.Tab4PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


