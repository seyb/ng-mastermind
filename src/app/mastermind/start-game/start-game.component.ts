import { Component } from '@angular/core';
import {startGameCommand} from '../../core/start-game.command';

@Component({
  selector: 'mastermind-start-game',
  standalone: true,
  template: `
    {{ gameId }}
    <button (click)="startGame()">Démarrer le jeu</button>
  `,
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {
  gameId = 'new-game-id';

  startGame() {
    console.log('start');
    this.gameId = startGameCommand().payload.id;
  }
}
