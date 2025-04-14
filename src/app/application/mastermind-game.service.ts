import {Injectable, signal} from '@angular/core';

import {startGameCommand} from '../core/start-game.command';
import {GameModel} from '../core/game.model';


@Injectable({
  providedIn: 'root'
})
export class MastermindGameService {
  readonly game = signal<GameModel | null>(null);

  start(): void {
    const gameEvent = startGameCommand();
    if (gameEvent.type === 'gameStarted') {
      this.game.set(gameEvent.payload);
    }
  }
}
