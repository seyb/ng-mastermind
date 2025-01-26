import {Injectable} from '@angular/core';
import {GameStartedEvent, startGame} from '../core/game';


@Injectable({
  providedIn: 'root'
})
export class MastermindGameService {
  start(): GameStartedEvent {
    return startGame();
  }
}
