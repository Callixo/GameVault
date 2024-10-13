import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  gameList: any[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.gameList = this.listService.getGameList(); // Obter a lista de jogos
  }
}

