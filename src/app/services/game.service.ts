import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiKey = '36499f579be149088a5c70e150516f9a';
  private baseUrl = 'https://api.rawg.io/api/games';

  constructor(private http: HttpClient) {}

  // Método para buscar lista de jogos
  getGames(): Observable<any> {
    return this.http.get(`${this.baseUrl}?key=${this.apiKey}`);
  }

  // Método para buscar detalhes de um jogo específico
  getGameDetails(gameId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${gameId}?key=${this.apiKey}`);
  }
}

