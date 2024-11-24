import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game: any;
  feedbackMessage: string = ''; // Mensagem de feedback

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private listService: ListService
  ) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.gameService.getGameDetails(gameId).subscribe((game) => {
      this.game = game;
    });
  }

  addToList() {
    const added = this.listService.addGameToList(this.game);

    if (added) {
      this.feedbackMessage = 'Jogo adicionado à sua lista!';
    } else {
      this.feedbackMessage = 'O jogo já está na sua lista.';
    }

    // Limpa a mensagem após 3 segundos
    setTimeout(() => {
      this.feedbackMessage = '';
    }, 3000);
  }
  
}

  







