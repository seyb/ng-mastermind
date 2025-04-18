import { Component } from '@angular/core';
import {startGameCommand} from '../../core/start-game.command';
import {NgIf} from '@angular/common';
import {GameId} from '../../core/game.model';

@Component({
  selector: 'mastermind-start-game',
  standalone: true,
  template: `
    <div *ngIf="gameId">
        game started with id:
        {{ gameId }}
    </div>
    <button *ngIf="!gameId" (click)="startGame()">Démarrer le jeu</button>
  `,
  imports: [
    NgIf
  ],
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {
  gameId : GameId | null = null;

  startGame() {
    let gameStartedEvent = startGameCommand();

    if (gameStartedEvent.type === 'gameStarted') {
      this.gameId = gameStartedEvent.payload.id;
    }
  }
}
