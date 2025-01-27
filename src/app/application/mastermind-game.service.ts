import {Injectable} from '@angular/core';

import {GameStartedEvent, startGameCommand} from '../core/startGameCommand';


@Injectable({
  providedIn: 'root'
})
export class MastermindGameService {
  start(): GameStartedEvent {
    return startGameCommand();
  }
}
