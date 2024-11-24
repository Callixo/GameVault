import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  latestGames = [
    { name: 'S.T.A.L.K.E.R 2', image: 'assets/images/game1.jpg' },
    { name: 'Black Myth: Wukong', image: 'assets/images/game2.jpg' },
    { name: 'Metaphor: ReFantazio', image: 'assets/images/game3.jpg' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Lógica futura para carregar jogos da API ou banco de dados
  }

  goToTab2() {
    this.router.navigate(['/tabs/tab2']); // Redireciona para o tab2
  }
}
