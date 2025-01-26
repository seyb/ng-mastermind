import { Injectable } from '@angular/core';
import {v7 as uuid} from 'uuid';
type UUID = string;
type Game = {
  id: UUID;
}

function startGame(): Game {
  return {
    id: uuid()
  }
}


@Injectable({
  providedIn: 'root'
})
export class MastermindGameService {
  start(): Game {
    return startGame();
  }
}
