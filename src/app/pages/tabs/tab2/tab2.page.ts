import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router'; // Importação do Router para navegação

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  games: any[] = [];

  // Injetando o Router no construtor para navegação
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.gameService.getGames().subscribe((response: any) => {
      this.games = response.results; // Resultados da API
    });
  }

  // Método para navegar para a página de detalhes do jogo
  goToGameDetails(gameId: string) {
    // Usando o Router para navegação para a página de detalhes
    this.router.navigate([`/game-details/${gameId}`]);
  }
}


