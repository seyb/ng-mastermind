import { Injectable } from '@angular/core';
import {v7 as uuid} from 'uuid';
type UUID = string;
type Game = {
  id: UUID;
}

function makeGame(): Game {
  return {
    id: uuid()
  }
}


@Injectable({
  providedIn: 'root'
})
export class MastermindGameService {

  constructor() { }

  startGame(): Game {
    return makeGame();
  }
}
