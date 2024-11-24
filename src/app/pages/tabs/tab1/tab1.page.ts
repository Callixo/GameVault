import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  gameList: any[] = [];

  constructor(private listService: ListService, private router: Router) {}

  ngOnInit() {
    this.gameList = this.listService.getGameList(); // Obter a lista de jogos
  }

  removeFromList(game: any) {
    this.listService.removeGame(game); // Remove o jogo da lista
    this.gameList = this.listService.getGameList(); // Atualiza a lista
  }

  goToReview(game: any) {
    this.router.navigate(['/review', game.id]); // Navega para a página de review
  }
}


