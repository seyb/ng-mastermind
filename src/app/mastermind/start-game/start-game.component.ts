import { Component } from '@angular/core';

@Component({
  selector: 'mastermind-start-game',
  standalone: true,
  template: `
    {{gameId}}
    <button>Démarrer</button>
  `,
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {
  gameId = 'new-game-id';
}
