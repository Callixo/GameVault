import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  gameId: string = '';
  gameName: string = '';
  reviewText: string = '';
  isEditing: boolean = false;
  feedbackMessage: string;

  constructor(
    private route: ActivatedRoute, // Para acessar os parâmetros da rota
    private router: Router, // Para navegação
    private listService: ListService // Serviço para gerenciar dados
  ) {}
  

  ngOnInit() {
    this.gameId = this.route.snapshot.paramMap.get('id') || '';
    const game = this.listService.getGameById(this.gameId);
    this.gameName = game?.name || 'Jogo não encontrado';
  
    // Busca a review associada ao jogo
    const review = this.listService.getReview(this.gameId);
    if (review) {
      this.reviewText = review.text;
      this.isEditing = true; // Indica que já existe uma review para edição
    }
  }
  
  
  

  saveReview() {
    if (this.gameId && this.reviewText) {
      this.listService.saveReview(this.gameId, { text: this.reviewText });
      this.isEditing = false; // Muda o estado para edição finalizada
      this.feedbackMessage = 'Review salva com sucesso!';
      console.log('Salvando review:', this.gameId, this.reviewText);

  
      // Limpa a mensagem após 3 segundos
      setTimeout(() => {
        this.feedbackMessage = '';
      }, 3000);
    }
  }
  

  editReview() {
    this.isEditing = true;
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']); // Navega de volta para a página de lista
  }
  
}

