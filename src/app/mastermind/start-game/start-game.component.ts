import { Component, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MastermindGameService } from '../../application/mastermind-game.service';

@Component({
  selector: 'app-mastermind-start-game',
  standalone: true,
  template: `
    <div *ngIf="gameId()">
      game started with id:
      {{ gameId() }}
    </div>
    <button *ngIf="!gameId()" (click)="startGame()">Démarrer le jeu</button>
  `,
  imports: [NgIf],
  styleUrl: './start-game.component.scss',
})
export class StartGameComponent {
  gameService: MastermindGameService = inject(MastermindGameService);
  gameId = computed(() => this.gameService.game()?.id ?? null);

  startGame() {
    this.gameService.start();
  }
}
