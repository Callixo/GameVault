import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private gameList: any[] = []; // Array para armazenar os jogos adicionados

  constructor() {}

  // Adiciona um jogo à lista se ele ainda não estiver nela
  addGameToList(game: any): boolean {
    const exists = this.gameList.some((item) => item.id === game.id);
    if (!exists) {
      this.gameList.push(game);
      return true; // Retorna true se o jogo foi adicionado
    }
    return false; // Retorna false se o jogo já estava na lista
  }

  // Retorna todos os jogos da lista
  getGameList() {
    return this.gameList;
  }
}


