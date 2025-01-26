import {v7 as uuid} from "uuid";

type UUID = string;

export type Game = {
  id: UUID;
}
export type GameStartedEvent = {
  type: 'gameStarted';
  game: Game;
}

export function startGame(): GameStartedEvent {
  return {
    type: 'gameStarted',
    game: {  id: uuid() }
  }
}
