import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { ListService } from '../services/list.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private listService: ListService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.gameService.getGameDetails(gameId).subscribe((response: any) => {
        this.game = response;
      });
    } else {
      console.error('ID do jogo não foi encontrado na URL.');
    }
  }

  // Método para adicionar o jogo à lista
  addToGameList() {
    const added = this.listService.addGameToList(this.game);
    if (added) {
      this.presentToast(`${this.game.name} foi adicionado à lista!`);
    }
    // Se `added` for false, o jogo já está na lista, então o toast não aparece
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }
}






