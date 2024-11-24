import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private gameList: any[] = [];
  private reviews: { [key: string]: { text: string } } = {};

  constructor() {}

  getGameList() {
    return this.gameList;
  }

  removeGame(game: any) {
    this.gameList = this.gameList.filter((g) => g.id !== game.id);
  }

  getGameById(id: string) {
    return this.gameList.find((game) => game.id === id); // Procura o jogo na lista pelo ID
  }  

  saveReview(gameId: string, review: { text: string }) {
    this.reviews[gameId] = review; // Armazena a review associada ao gameId
    console.log('Review salva no serviço:', this.reviews);
  }
  
  getReview(gameId: string) {
    return this.reviews[gameId]; // Retorna a review associada ao gameId
  }
  

  addGameToList(game: any) {
    // Verifica se o jogo já está na lista
    const exists = this.gameList.some((g) => g.id === game.id);
  
    if (!exists) {
      this.gameList.push(game);
      return true; // Retorna true se o jogo foi adicionado
    }
  
    return false; // Retorna false se o jogo já existia
  }
  
}



